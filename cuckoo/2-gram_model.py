import pandas as pd
import numpy as np

def report_generator(number, result, att_type, family):
    jobj = {
    'Task_ID':number,
    'Malicious':result,
    'Att_type':
    {
     'Adware':str(att_type['Adware']),
     'Backdoor':str(att_type['Backdoor']),
     'BrowserModifier':str(att_type['BrowserModifier']),
     'Others':str(att_type['Others']),
     'PUA':str(att_type['PUA']),
     'PWS':str(att_type['PWS']),
     'Ransom':str(att_type['Ransom']),
     'Rogue':str(att_type['Rogue']),
     'SoftwareBundler':str(att_type['SoftwareBundler']),
     'Trojan':str(att_type['Trojan']),
     'TrojanDownloader':str(att_type['TrojanDownloader']),
     'TrojanDropper':str(att_type['TrojanDropper']),
     'TrojanSpy':str(att_type['TrojanSpy']),
     'VirTool':str(att_type['VirTool']),
     'Virus':str(att_type['Virus']),
     'Worm':str(att_type['Worm']),
    },
    'Family':
    {
     'Allaple':str(family['Allaple']),
     'Dinwod':str(family['Dinwod']),
     'Gamarue':str(family['Gamarue']),
     'Ludbaruma':str(family['Ludbaruma']),
     'Mira':str(family['Mira']),
     'Others':str(family['Others']),
     'Parite':str(family['Parite']),
     'Ramnit':str(family['Ramnit']),
     'Sality':str(family['Sality']),
     'Shodi':str(family['Shodi']),
     'Upatre':str(family['Upatre']),
     'VB':str(family['VB']),
     'Virut':str(family['Virut']),
     'Vobfus':str(family['Vobfus']),
     'Wacatac':str(family['Wacatac']),
     'Yuner':str(family['Yuner'])}
    }
    return jobj

def main_function(apiseq:list, task_id:int, static_result:bool):

  # preparing type prediction
  type_model = load_model('16type_model.h5')
  type_prediction_df = pd.read_csv('type_prediction_df.csv')
  typeList = ['Adware', 'Backdoor', 'BrowserModifier', 'Others', 'PUA', 'PWS', 'Ransom', 'Rogue', 'SoftwareBundler', 
              'Trojan', 'TrojanDownloader', 'TrojanDropper', 'TrojanSpy', 'VirTool', 'Virus', 'Worm']

  # preparing family prediction
  family_model = load_model('16family_model.h5')
  family_prediction_df = pd.read_csv('family_prediction_df.csv')
  familyList = ['Allaple', 'Dinwod', 'Gamarue', 'Ludbaruma', 'Mira', 'Others', 'Parite', 'Ramnit', 
                'Sality', 'Shodi', 'Upatre', 'VB', 'Virut', 'Vobfus', 'Wacatac', 'Yuner']

  # scan 2_grams in input sequence
  for i in range(len(apiseq)-1):
    gram2 = str(apiseq[i:i+2])
    if gram2 in type_prediction_df.columns:
      type_prediction_df.at[0, gram2] = 1
    if gram2 in family_prediction_df.columns:
      family_prediction_df.at[0, gram2] = 1

  # prediction
  type_probs = type_model.predict(type_prediction_df.iloc[:,:]).tolist()[0]
  att_type = dict(zip(typeList, type_probs))
  family_probs = family_model.predict(family_prediction_df.iloc[:,:]).tolist()[0]
  family = dict(zip(familyList, family_probs))
  
  # generate report
  report = report_generator(task_id, static_result, att_type, family)
  return report  
