import pefile
import os
import json
import hashlib
import pandas as pd
import csv
import pickle
import numpy as np
from math import sqrt, ceil

def contain_symbol(keyword):
  symbols = "~!@#$%^&*()_+-*/<>,.[]\/"
  for symbol in symbols:
      if symbol in keyword:
          return True
  else:
      return False

def parse_pe(path):
  api_call = []
  api_seq = []
  pef = pefile.PE(path)
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
  return ret_val[:-1]

def pe_info(path):
  pef = pefile.PE(path)
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

def grayscale_image(path):
  with open(path, 'rb') as binary_file:
    data = binary_file.read()
  data_len = len(data)
  d = np.frombuffer(data, dtype=np.uint8)
  sqrt_len = int(ceil(sqrt(data_len)))
  new_len = sqrt_len*sqrt_len
  pad_len = new_len - data_len
  padded_d = np.hstack((d, np.zeros(pad_len, np.uint8)))
  im = np.reshape(padded_d, (sqrt_len, sqrt_len))
  
  return im

def report_generator(number, pred, sec, dll, img):
  jobj = {
    'Task_ID':number,
    'Result':
    {
      'Malicious':pred[0][0]
    },
    'Number_of_Sections':len(sec),
    'DLL':[],
    'Gray_scale':img
  }

  for j in range(len(dll)):
    jobj['DLL'].append(dll[j].dll.decode('utf-8'))
  
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

def main_function(path):
  try:
    import_api = parse_pe(path)
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
  sec,dll = pe_info(path)
  img = grayscale_image(path)

  pickle_in = open('XGB.pickle','rb')
  XGB = pickle.load(pickle_in)
  pred = XGB.predict_proba(seq_pd)

  ret_val = report_generator(1, pred, top10, sec, dll, img)
  return ret_val

