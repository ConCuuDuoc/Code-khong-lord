import json
import requests
import jwt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from jwt.algorithms import RSAAlgorithm
from botocore.exceptions import ClientError
from dotenv import load_dotenv
import os
import boto3

dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
# Load env variables
load_dotenv(dotenv_path)


class RegisterView(APIView):
    def post(self, request):
        
        user_pool_id = os.environ.get("USER_POOL_ID")

        # Create Client ID first
        client_name = request.data.get('username')


        # Initialize the boto3 Cognito IDP client
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
)
        try:
            # Create the user pool client
            response = client.create_user_pool_client(
                UserPoolId=user_pool_id,
                ClientName=client_name,
                ExplicitAuthFlows=['ALLOW_REFRESH_TOKEN_AUTH','ALLOW_USER_PASSWORD_AUTH','ALLOW_CUSTOM_AUTH','ALLOW_USER_SRP_AUTH'],
                RefreshTokenValidity=12,
                IdTokenValidity=60,
                AccessTokenValidity=60,
                TokenValidityUnits={
            'AccessToken': 'minutes',  # or 'minutes', 'days'
            'IdToken': 'minutes',      # or 'minutes', 'days'
            'RefreshToken': 'hours',  # or 'minutes', 'hours'
            }
            )

            # Extract the App Client ID from the response
            app_client_id = response.get('UserPoolClient', {}).get('ClientId')

            Response({'UserPoolId': user_pool_id, 'AppClientId': app_client_id}, status=status.HTTP_201_CREATED)
        except client.exceptions.ClientError as e:
            # Handle AWS client errors (e.g., invalid parameters or internal errors)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Handle other exceptions (e.g., network errors)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        # Check exist email first
        # Get data from request
        email = request.data.get('email')

        try:
            # Check if the email already exists in the user pool
            response = client.list_users(
                UserPoolId=user_pool_id,
                Filter=f'email = "{email}"',
        )
            if response.get('Users'):
                return Response({"error": "An account with the given email already exists."}, status=status.HTTP_400_BAD_REQUEST)
        except ClientError as e:
            # Handle possible exceptions from the list_users call
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        # Initialize Cognito client

        # Get data from request
        username = request.data.get('username')
        password = request.data.get('password')
        # Add additional attributes as needed
        attributes = [
            {
                'Name': 'email',
                'Value': request.data.get('email')
            },
            # Add other attributes here
        ]
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")
        )
        try:
            # Call Cognito to create the user
            response = client.sign_up(
                ClientId=app_client_id,
                Username=username,
                Password=password,
                UserAttributes=attributes
            )
            return Response(response, status=status.HTTP_201_CREATED)
        except client.exceptions.UsernameExistsException:

            return Response({"error": "This username already exists."}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            # Handle any other exception
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ConfirmRegistrationView(APIView):
    def post(self, request):
        
        #COGNITO_USER_POOL_ID = os.getenv('COGNITO_USER_POOL_ID')
        #user_pool_id = settings.COGNITO_USER_POOL_ID

        user_pool_id = os.environ.get("USER_POOL_ID")

        #Confirmation steps
        username = request.data.get('username')
        confirmation_code = request.data.get('confirmation_code')

        #FOR THE REAL CONFIRMATION CODE
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
)
        try:
            # List the user pool clients
            response = client.list_user_pool_clients(
                UserPoolId=user_pool_id,
                MaxResults=60  # Adjust this value as necessary
            )

            # Extract the App Client ID from the response
            # Here you might want to apply some logic to find the right client,
            # for example by name or another identifier.
            app_client_list = response.get('UserPoolClients', [])
            app_client_id = None
            for client in app_client_list:
                if client['ClientName'] == username:
                    app_client_id = client['ClientId']
                    break

            # Check if the App Client ID was found
            if app_client_id:
                Response({'AppClientId': app_client_id}, status=status.HTTP_200_OK)
            else:
                Response({'error': 'App Client not found'}, status=status.HTTP_404_NOT_FOUND)

        except client.exceptions.ClientError as e:
            # Handle AWS client errors (e.g., invalid parameters or internal errors)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Handle other exceptions (e.g., network errors)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        if not username or not confirmation_code:
            return Response({"error": "Username and confirmation code are required."}, status=status.HTTP_400_BAD_REQUEST)
        
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
)
        
        try:
            response = client.confirm_sign_up(
                ClientId=app_client_id,
                Username=username,
                ConfirmationCode=confirmation_code
            )
        
        # #FAKE TIME
        # client = settings.COGNITO_CLIENT
        # try:
        #     response = client.admin_confirm_sign_up(
        #         UserPoolId=user_pool_id,
        #         Username=username)
            return Response({"message": "User confirmed successfully."}, status=status.HTTP_200_OK)
        except client.exceptions.UserNotFoundException:
            return Response({"error": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.CodeMismatchException:
            return Response({"error": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)
        except client.exceptions.ExpiredCodeException:
            return Response({"error": "Verification code has expired."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LoginView(APIView):
    def post(self, request):
        #COGNITO_USER_POOL_ID = os.getenv('COGNITO_USER_POOL_ID')
        #user_pool_id = settings.COGNITO_USER_POOL_ID

        user_pool_id = os.environ.get("USER_POOL_ID")

        # Initialize Cognito client
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
)
        # Get data from request
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            # List the user pool clients
            response = client.list_user_pool_clients(
                UserPoolId=user_pool_id,
                MaxResults=60  # Adjust this value as necessary
            )

            # Extract the App Client ID from the response
            # Here you might want to apply some logic to find the right client,
            # for example by name or another identifier.
            app_client_list = response.get('UserPoolClients', [])
            app_client_id = None
            for client in app_client_list:
                if client['ClientName'] == username:
                    app_client_id = client['ClientId']
                    break

            # Check if the App Client ID was found
            if app_client_id:
                Response({'AppClientId': app_client_id}, status=status.HTTP_200_OK)
            else:
                Response({'error': 'App Client not found'}, status=status.HTTP_404_NOT_FOUND)

        except client.exceptions.ClientError as e:
            # Handle AWS client errors (e.g., invalid parameters or internal errors)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Handle other exceptions (e.g., network errors)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
)
        try:
            # Call Cognito to authenticate the user
            response = client.initiate_auth(
                ClientId=app_client_id,
                AuthFlow='USER_PASSWORD_AUTH',
                AuthParameters={
                    'USERNAME': username,
                    'PASSWORD': password
                }
            )
            return Response(response, status=status.HTTP_200_OK)
        except client.exceptions.NotAuthorizedException as e:
            # Handle exception for invalid credentials
            return Response({"error": "The username or password is incorrect"}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            # Handle any other exception
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def get_cognito_jwks(user_pool_id):

    user_pool_id = os.environ.get("USER_POOL_ID")
    region = os.environ.get("REGION_NAME")
    url = f'https://cognito-idp.{region}.amazonaws.com/{user_pool_id}/.well-known/jwks.json'
    
    return requests.get(url).json()


def validate_cognito_jwt(token, user_pool_id,region):
    # Fetch the JWKs and decode the token
    jwks = get_cognito_jwks(user_pool_id)
    
    headers = jwt.get_unverified_header(token)
    

    key = next((k for k in jwks['keys'] if k['kid'] == headers['kid']), None)
    
    if key is None:
        raise ValueError('Invalid token: Key not found')

    public_key = RSAAlgorithm.from_jwk(json.dumps(jwks['keys'][0]))

    # Unverify token
    unverified_token = jwt.decode(token, options={"verify_signature": False})

    # Get token_use-type and check valid type
    token_use = unverified_token.get('token_use')
    if (token_use == 'id'):
        username = unverified_token.get('cognito:username')
    elif (token_use == 'access'):
        username = unverified_token.get('username')
    else:
        raise ValueError('Invalid token: Token use not found')

    try:
            client = settings.COGNITO_CLIENT
            # List the user pool clients
            response = client.list_user_pool_clients(
                UserPoolId=user_pool_id,
                MaxResults=60  # Adjust this value as necessary
            )

            # Extract the App Client ID from the response
            # Here you might want to apply some logic to find the right client,
            # for example by name or another identifier.
            app_client_list = response.get('UserPoolClients', [])
            app_client_id = None
            for client in app_client_list:
                if client['ClientName'] == username:
                    app_client_id = client['ClientId']
                    break

            # Check if the App Client ID was found
            if app_client_id:
                Response({'AppClientId': app_client_id}, status=status.HTTP_200_OK)
            else:
                Response({'error': 'App Client not found'}, status=status.HTTP_404_NOT_FOUND)

    except client.exceptions.ClientError as e:
            # Handle AWS client errors (e.g., invalid parameters or internal errors)
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
            # Handle other exceptions (e.g., network errors)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Decode the token
    try:
            decoded = None
            if (token_use == 'id'):
                decoded = jwt.decode(token, public_key, algorithms=['RS256'], audience=app_client_id, options={"require_exp": True})
            else:
               decoded = jwt.decode(
                        token,
                        public_key,
                        algorithms=['RS256'],
                        issuer=f'https://cognito-idp.{region}.amazonaws.com/{user_pool_id}',
                        options={"verify_aud": False, "require_exp": True}
                )  # Enable expiration check  # Skip audience verification

            # Token is valid and not expired
    except jwt.ExpiredSignatureError:
            # Handle the expired token
            raise ValueError("Token has expired")
    except jwt.DecodeError:
            # Handle other decode errors (e.g., invalid token, wrong audience)
            raise ValueError("Token is invalid: Cannot decode")
    except jwt.InvalidIssuerError:
        # Handle the wrong issuer
            raise ValueError("Token has an invalid issuer")
    except jwt.InvalidSignatureError:
        # Token signature is invalid - could indicate tampering
            raise ValueError("Token signature is invalid")

    return decoded


class VerifyTokenView(APIView):
# Access token:
# {'auth_time': 1700317052, 'client_id': 'eh9lryrg6lxzjjnbl7izd5r4l', 'event_id': 'd12e6e4b-0b5b-4423-869a-058e7e83534c', 'iat': 1700317052, 'jti': '195a79e7-95b1-4255-b8f8-32c0493b6879', 'scope': 'aws.cognito.signin.user.admin', 'sub': '3eaaf746-4a55-4273-b85c-66ea07502e5c', 'token_use': 'access', 'username': 'cuutoi', 'exp': 1700403452, 'iss': 'http://localhost:9229/local_33DvJMdE'}
# ID token
# {'cognito:username': 'cuutoi', 'auth_time': 1700317052, 'email': 'cuutoi@gmail.com', 'email_verified': False, 'event_id': 'd12e6e4b-0b5b-4423-869a-058e7e83534c', 'iat': 1700317052, 'jti': '5a6751e6-0cae-4c24-bc43-896389dea81d', 'sub': '3eaaf746-4a55-4273-b85c-66ea07502e5c', 'token_use': 'id', 'exp': 1700403452, 'aud': 'eh9lryrg6lxzjjnbl7izd5r4l', 'iss': 'http://localhost:9229/local_33DvJMdE'}"""

    def post(self, request, *args, **kwargs):
        id_token = request.data.get('IdToken')
        access_token = request.data.get('AccessToken')

        #COGNITO_USER_POOL_ID = os.getenv('COGNITO_USER_POOL_ID')
        #user_pool_id = settings.COGNITO_USER_POOL_ID

        user_pool_id = os.environ.get("USER_POOL_ID")

        region = os.environ.get("REGION_NAME")
        

        try:
            if id_token:
                validate_cognito_jwt(id_token, user_pool_id, region)
                #return Response({"ok":"ok"})
            if access_token:
                validate_cognito_jwt(access_token, user_pool_id, region)

            return Response({"message": "Tokens are valid"})
        except ValueError as e:
            return Response({"message": str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"message": f"Invalid token, {e}"}, status=status.HTTP_401_UNAUTHORIZED)


class ForgotPasswordView(APIView): #Can only use for the real AWS Cognito
    def post(self, request):
        # Get the username (or email) from the request
        username = request.data.get("username")

        # Initialize the Cognito client
        client = settings.COGNITO_CLIENT

        try:
            # Initiate the forgot password process
            response = client.forgot_password(
                ClientId='your-cognito-app-client-id',
                Username=username
            )
            return Response(response, status=status.HTTP_200_OK)
        except client.exceptions.UserNotFoundException:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.InvalidParameterException as e:
            # Handle other exceptions as necessary
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": "An unexpected error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
