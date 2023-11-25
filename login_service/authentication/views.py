import json
import requests
import jwt
import os
import boto3
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from jwt.algorithms import RSAAlgorithm
from botocore.exceptions import ClientError
from dotenv import load_dotenv
from django.http import JsonResponse


dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
# Load env variables
load_dotenv(dotenv_path)


class RegisterView(APIView):
    def post(self, request):
        
        user_pool_id = os.environ.get("USER_POOL_ID")

        # Initialize the boto3 Cognito IDP client
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
)
        app_client_id = os.getenv("APP_CLIENT_ID")
        
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
        app_client_id = os.getenv("APP_CLIENT_ID")
        
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

        # Get data from request
        username = request.data.get('username')
        password = request.data.get('password')

        app_client_id = os.getenv("APP_CLIENT_ID")

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

    public_keys = []
    for key_data in jwks['keys']:
        jwk_json = json.dumps(key_data)
        public_key = RSAAlgorithm.from_jwk(jwk_json)
        public_keys.append(public_key)

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

    app_client_id = os.getenv("APP_CLIENT_ID")

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

    def post(self, request, *args, **kwargs):
        payload = request.data
        if ('AccessToken' in payload):
            access_token = request.data.get('AccessToken')
        elif ('IdToken' in payload):
            id_token = request.data.get('IdToken')
        else:
            return Response({"message": "Don't have token"})
        #COGNITO_USER_POOL_ID = os.getenv('COGNITO_USER_POOL_ID')
        #user_pool_id = settings.COGNITO_USER_POOL_ID

        user_pool_id = os.environ.get("USER_POOL_ID")

        region = os.environ.get("REGION_NAME")
        

        try:
            if id_token:
                validate_cognito_jwt(id_token, user_pool_id, region)
            if access_token:
                validate_cognito_jwt(access_token, user_pool_id, region)

            return Response({"message": "Tokens are valid"})
        except ValueError as e:
            return Response({"message": str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"message": f"Invalid token, {e}"}, status=status.HTTP_401_UNAUTHORIZED)


class ForgotPasswordView(APIView):
    def post(self, request, *args, **kwargs):
        # Retrieve the username from the request data
        username = request.data.get('username')

        # Ensure that username is provided
        if not username:
            return Response({"message": "Username is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        # Retrieve your AWS Cognito User Pool Client ID from environment variables
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
        )
        # Initialize Cognito client
        
        app_client_id = os.getenv("APP_CLIENT_ID")

        # Create a Cognito Identity Provider client
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
        )

        try:
            # Initiate the forgot password workflow in Cognito
            client.forgot_password(
                ClientId=app_client_id,
                Username=username
            )
            return Response({"message": "Password reset initiated. Check your email for the verification code."})
        
        except client.exceptions.UserNotFoundException:
            # You might want to handle this discreetly in a production environment
            # to not reveal whether a username exists in your user pool
            return Response({"message": "Invalid username."}, status=status.HTTP_400_BAD_REQUEST)

        except client.exceptions.InvalidParameterException as e:
            # This can occur if the user does not have a verified email or phone number
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        except client.exceptions.LimitExceededException:
            return Response({"message": "Attempt limit exceeded, please try after some time."}, status=status.HTTP_429_TOO_MANY_REQUESTS)

        except Exception as e:
            # Log e for debugging
            return Response({"message": "An error occurred while processing your request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ConfirmNewPasswordView(APIView):
    def post(self, request, *args, **kwargs):
        # Retrieve the required fields from the request data
        username = request.data.get('username')
        verification_code = request.data.get('verification_code')
        new_password = request.data.get('new_password')

        # Validate the inputs
        if not all([username, verification_code, new_password]):
            return Response({"message": "Missing parameters. Username, verification code, and new password are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Retrieve your AWS Cognito User Pool Client ID from environment variables
         # Retrieve your AWS Cognito User Pool Client ID from environment variables

        # Initialize Cognito client
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
        )
        app_client_id = os.getenv("APP_CLIENT_ID")

        # Create a Cognito Identity Provider client
        client = boto3.client(
        'cognito-idp',
        region_name = os.environ.get("REGION_NAME"),  # Replace with your AWS region
        aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),  # Replace with your AWS access key
        aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY")  # Replace with your AWS secret key
        )


        try:
            # Confirm the new password with Cognito
            client.confirm_forgot_password(
                ClientId=app_client_id,
                Username=username,
                ConfirmationCode=verification_code,
                Password=new_password
            )
            return Response({"message": "Password changed successfully."})

        except client.exceptions.UserNotFoundException:
            # You might want to handle this discreetly in a production environment
            return Response({"message": "User not found."}, status=status.HTTP_400_BAD_REQUEST)

        except client.exceptions.CodeMismatchException:
            return Response({"message": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)

        except client.exceptions.LimitExceededException:
            return Response({"message": "Attempt limit exceeded, please try after some time."}, status=status.HTTP_429_TOO_MANY_REQUESTS)

        except client.exceptions.InvalidPasswordException as e:
            # This exception is raised when the provided password does not meet the password policy requirements
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # Log e for debugging
            return Response({"message": "An unexpected error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)