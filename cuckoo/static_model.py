import pefile
import os
import json
import hashlib
import pandas as pd
import csv
import pickle
import numpy as np
from math import sqrt, ceil, pow, floor, log
from database import store_static_prediction
import xgboost
import sklearn

def contain_symbol(keyword):
  symbols = "~!@#$%^&*()_+-*/<>,.[]\/"
  for symbol in symbols:
      if symbol in keyword:
          return True
  else:
      return False

def convert_size(size_bytes):
   if size_bytes == 0:
     return "0B"
   size_name = ("B", "KB", "MB", "GB")
   i = int(floor(log(size_bytes, 1024)))
   p = pow(1024, i)
   s = round(size_bytes / p, 2)
   return "%s %s" % (s, size_name[i])

def parse_pe(file):
  api_call = []
  api_seq = []
  pef = pefile.PE(data=file)
  for entry in pef.DIRECTORY_ENTRY_IMPORT:
    for API in entry.imports:
      name = API.name.decode('UTF-8')
      if contain_symbol(name):
        name = 'Garbled'
      if api_call.count(name)==0:
        api_call.append(name)
  api_call.sort()
  for each in api_call:
    try:
      tmp = import_api_dict[each]
    except:
      continue
    api_seq.append(tmp)
  ret_val = ''
  for each in api_seq:
    ret_val = ret_val + str(each) + '/'
  return ret_val[:-1], api_call

def pe_info(file):
  pef = pefile.PE(data=file)
  sec = pef.sections
  dll = pef.DIRECTORY_ENTRY_IMPORT
  return sec,dll

def pad(seq):
  seq = seq.split('/')
  tmp = []
  for i in range(len(seq)):
    tmp.append(int(seq[i]))
  ret_val = []
  for i in range(len(import_api_dict)):
      if tmp.count(i)==0:
          ret_val.append(0)
      else:
          ret_val.append(1)
  return ret_val

def grayscale_image(data):
  data_len = len(data)
  d = np.frombuffer(data, dtype=np.uint8)
  sqrt_len = int(ceil(sqrt(data_len)))
  new_len = sqrt_len*sqrt_len
  pad_len = new_len - data_len
  padded_d = np.hstack((d, np.zeros(pad_len, np.uint8)))
  im = np.reshape(padded_d, (sqrt_len, sqrt_len))

  return im

def report_generator(md5, pred, sec, dll, img):
  jobj = {
    'MD5':md5,
    'Result':
    {
      'Malicious':pred[0][0]
    },
    'Number_of_Sections':len(sec),
    'Section':[],
    'DLL':[],
    'Gray_scale':img
  }

  for j in range(len(dll)):
    jobj['DLL'].append(dll[j].dll.decode('utf-8'))

  for i in range(len(sec)):
    jobj['Sections'].append( {'Name':sec[i].Name.decode('utf-8').rstrip('\x00'), 'Virtual_Address':sec[i].VirtualAddress,
                  'Virtual_Size':sec[i].Misc_VirtualSize, 'Raw_Size':sec[i].SizeOfRawData, 'Entropy':sec[i].get_entropy(),
                  'Md5':sec[i].get_hash_md5()} )

  return jobj

import_api_dict = {}
with open('import_api_dict.csv', 'r') as csvfile:
  rows = csv.DictReader(csvfile)
  for row in rows:
    import_api_dict.update({row['api']:row['num']})

api_list = []
for each in import_api_dict:
  api_list.append(each)

api_dict = {}
for i in range(len(api_list)):
  api_dict.update({api_list[i]: int})

def static_main(file, md5):
  try:
    import_api, imported_apis = parse_pe(file)
  except:
    return 'Not PE file'

  seq = pad(import_api)
  seq_dict = {}
  for i in range(len(import_api_dict)):
    if seq[i]==1:
      seq_dict.update({api_list[i]:1})
    else:
      seq_dict.update({api_list[i]:0})
  seq_pd = pd.DataFrame(seq_dict,index=[0])
  #sec, dll
  sec,dll = pe_info(file)
  '''section = []
  for i in range(len(sec)):
    section.append( {'Name':sec[i].Name.decode('utf-8').rstrip('\x00'), 'Virtual_Address':sec[i].VirtualAddress,
                  'Virtual_Size':sec[i].Misc_VirtualSize, 'Raw_Size':sec[i].SizeOfRawData, 'Entropy':sec[i].get_entropy(),
                  'Md5':sec[i].get_hash_md5()} )'''
  import_dll = []
  for j in range(len(dll)):
    import_dll.append(dll[j].dll.decode('utf-8'))

  #img
  img = grayscale_image(file)

  #file size in bytes
  size =len(file)



  pickle_in = open('XGB.pickle','rb')
  XGB = pickle.load(pickle_in)
  #pred
  pred = XGB.predict_proba(seq_pd)


  # 幫我依序填入要存到db的值，順序可參考database.py被註解的main
  args = [md5, float(pred[0][0]), size, len(sec), imported_apis, import_dll, img.tolist()]
  store_static_prediction(args)

  # 不用return了 因為已經存到db
  #ret_val = report_generator(md5, pred, sec, dll, img)
  return args
