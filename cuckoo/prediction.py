#functions
import csv
import os
import json
import tensorflow as tf
import numpy as np

def apisequence(file):
    with open(file) as json_file:  
        jsonObj = json.load(json_file)
        report_sec_len = len(jsonObj['behavior']['processes'])
        apiCallSequence = []
        for i in range(report_sec_len):
            api = [call['api'] for call in jsonObj['behavior']['processes'][i]['calls']]
            apiCallSequence += api
        return apiCallSequence

def pad_x(seq):
    api = []
    tmp = []
    if len(seq)>100:
        tmp = seq[:100]
    else:
        tmp = seq
        tmp += [0] * (100-len(tmp))
    api.append(tmp)
    api = np.array(api)
    return api

def ret_value_type(prediction_type,dict_type):
    prediction_type = tf.nn.softmax(prediction_type)
    prediction_type = prediction_type.numpy()
    ret_dict = {}
    for i in range(16):
        ret_dict.update({dict_type[i]:prediction_type[0][i]})
    return ret_dict

def ret_value_family(prediction_family,dict_family):
    prediction_family = tf.nn.softmax(prediction_family)
    prediction_family = prediction_family.numpy()
    ret_dict = {}
    for i in range(16):
        ret_dict.update({dict_family[i]:prediction_family[0][i]})
    return ret_dict

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


# In[ ]:


def main_function(file, task_id):
    #build api_dict
    api_dict = {}
    with open('api_dict.csv', 'r') as csvfile:
        rows = csv.DictReader(csvfile)
        for row in rows:
            api_dict.update({row['api']:row['num']})

    dict_type = {0:'Adware',1:'Backdoor',2:'BrowserModifier',3:'Others',4:'PUA',5:'PWS',6:'Ransom',7:'Rogue',8:'SoftwareBundler',9:'Trojan',10:'TrojanDownloader',11:'TrojanDropper',12:'TrojanSpy',13:'VirTool',14:'Virus',15:'Worm'}
    dict_family = {0:'Allaple',1:'Dinwod',2:'Gamarue',3:'Ludbaruma',4:'Mira',5:'Others',6:'Parite',7:'Ramnit',8:'Sality',9:'Shodi',10:'Upatre',11:'VB',12:'Virut',13:'Vobfus',14:'Wacatac',15:'Yuner'}

    
    #parse api sequence
    seq = []
    tmp = apisequence(file)
    for each in tmp:
        seq.append(int(api_dict[each]))

    #load models
    model_type = tf.keras.models.load_model('test_type_model.h5')
    model_family = tf.keras.models.load_model('test_family_model.h5')

    #pad sequences
    predict_seq = pad_x(seq[:1])
    #predict by sequences
    t1 = model_type.predict(predict_seq[:1])
    t2 = model_family.predict(predict_seq[:1])
    #translate prediction into real label
    ret_type = ret_value_type(t1,dict_type)
    ret_family = ret_value_family(t2,dict_family)

    result = True

    report = report_generator(task_id,result,ret_type,ret_family)

    return report


main_function('a097781031738758dbf6fa7af0104980.json', 5)
print(report)