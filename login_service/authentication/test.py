import jwt
from dotenv import load_dotenv
import os
import requests
from jwt.algorithms import RSAAlgorithm
import json
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
# Load env variables
load_dotenv(dotenv_path)
token = "eyJraWQiOiJ2SDVxXC85Vlh1Z2Q3aG5jRHJcLzJRblRGYUtjaytFMkN2Z1orbDE1dW01VmM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5ZTg4M2I1My03ZTU3LTQ0MTctYWFhMi1jZjFmM2JhZjkwN2YiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9vQU5zWk5GaHUiLCJjbGllbnRfaWQiOiIxM25idW12NWVmdWpybWxyN2w1NDZuYmo2bSIsIm9yaWdpbl9qdGkiOiIyMTJmMmYwNi0zYTU4LTRlNmItOWI4Mi1mZWI3OGFjZWEzZTgiLCJldmVudF9pZCI6IjVmMzY2YzVmLTBiOTYtNDg3Ny1hYWQ2LTVlYjc0YzlmODcyZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDA4ODExNTMsImV4cCI6MTcwMDg4NDc1MywiaWF0IjoxNzAwODgxMTUzLCJqdGkiOiJiNTdjYWRjYy1lMzU0LTRjMjUtOTVkNC1iYzVjNjE2YTgyMGUiLCJ1c2VybmFtZSI6ImN1dXRvaSJ9.hqA4-RIyLwIFUAkERlgEc6QjvgwU8WaVPBoBRDNGJYkdG_YezBhm14KeOIQHylR9vhes0VX5n3WJ3bDA4byDEEzPE6x0u8fE0EyL0zXmsZeWEPuMfe0tKF0qa_cLqgMmgOWDN8aKgAs8w2c50Wiq61ELcYP5JCyE9m2xb6xuUFcZbwUXfWeTib6M6-vWm8UOpbJwkxByeUPFP-me72vDqe4y8dv1p-M1h204r7h8fDsNdrdMhJDcEip_BM8eEuQl3g-Uiywi9dKsdcEGPQPWagBdE4Myk24ukXvPL2gz8fSKQuJ-lszODa1G_Q-AhJ1bMq3KpzmcJKnC-sZ_GJoibg"
def get_cognito_jwks(user_pool_id):

    user_pool_id = os.environ.get("USER_POOL_ID")
    region = os.environ.get("REGION_NAME")
    url = f'https://cognito-idp.{region}.amazonaws.com/{user_pool_id}/.well-known/jwks.json'
    
    return requests.get(url).json()

user_pool_id = os.environ.get("USER_POOL_ID")
region = os.environ.get("REGION_NAME")
jwks = get_cognito_jwks(user_pool_id)
    
headers = jwt.get_unverified_header(token)
    

key = next((k for k in jwks['keys'] if k['kid'] == headers['kid']), None)
    
if key is None:
        raise ValueError('Invalid token: Key not found')

public_keys = []
for key_data in jwks['keys']:
    jwk_json = json.dumps(key_data)
    public_key = RSAAlgorithm.from_jwk(jwk_json)
    public_keys.append(public_key)

print(public_key)
unverified_token = jwt.decode(token, options={"verify_signature": False})
decoded = jwt.decode(
                        token,
                        public_key,
                        algorithms=['RS256'],
                        issuer=f'https://cognito-idp.{region}.amazonaws.com/{user_pool_id}',
                        options={"verify_aud": False, "require_exp": True}
                )  # Enable expiration check  # Skip audience verification
#print(unverified_token)
print(decoded)