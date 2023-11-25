import os  
from dotenv import load_dotenv
from urllib.parse import urlencode
import requests

dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path)
code = '941c2e04-811e-4657-841d-be2e5dd40396'
# Load env variables
token_url = os.getenv("TOKEN_URL")
print(token_url)
headers = {'Content-Type': 'application/x-www-form-urlencoded'}
app_client_id = os.getenv("APP_CLIENT_ID")
redirect_link = os.getenv("REDIRECT_URL")
data = {
                'grant_type': 'authorization_code',
                'client_id': app_client_id,
                'code': code,
                'redirect_uri': redirect_link
            }

response = requests.post(url=token_url, headers=headers, data=data)
print(response._content)