import os  
from dotenv import load_dotenv
from urllib.parse import urlencode, quote
import requests

dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path)
code = '941c2e04-811e-4657-841d-be2e5dd40396'
# Load env variables
logout_url = os.getenv("LOGOUT_URL")
app_client_id = os.getenv("APP_CLIENT_ID")
redirect_link = os.getenv("REDIRECT_LOGOUT")
query_params = {
            'client_id': app_client_id,
            'logout_uri': redirect_link,
        }

logout_uri = f"{logout_url}?{urlencode(query_params)}"
print(logout_uri)