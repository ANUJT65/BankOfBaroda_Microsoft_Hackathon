import json
import time
from azure.core.exceptions import ResourceNotFoundError
from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import FormRecognizerClient, FormTrainingClient

credentials = json.load(open('C:/Pratham/Academics/BTech/TY/hackathons/bob_hackathon/backend/credentials.json'))
API_KEY = credentials['API_KEY']
ENDPOINT = credentials['ENDPOINT']

form_recognizer_client = FormRecognizerClient(ENDPOINT, AzureKeyCredential(API_KEY))

receipt_url = 'https://media-cdn.tripadvisor.com/media/photo-s/13/f7/7a/75/receipt.jpg'
poller = form_recognizer_client.begin_recognize_receipts_from_url(receipt_url)

time.sleep(3)
if poller.status() == 'succeeded':
    result = poller.result()
    for receipt in result:
        print(receipt.form_type)
        for name, field in receipt.fields.items():
            if name == 'Items':
                print('Purchase Item')
                for indx, item in enumerate(field.value):
                    print('\tItem #{0}'.format(indx + 1))
                    for item_name, item in item.value.items():
                        print('\t{0}: {1} Confidence: {2}'.format(item_name, item.value, item.confidence))
            else:
                print('{0}: {1} - Confidence {2}'.format(name, field.value, field.confidence))