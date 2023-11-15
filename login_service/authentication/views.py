from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
# import os

class RegisterView(APIView):
    def post(self, request):
        
        #COGNITO_USER_POOL_ID = os.getenv('COGNITO_USER_POOL_ID')
        #user_pool_id = settings.COGNITO_USER_POOL_ID

        user_pool_id = "local_33DvJMdE"

        # Create Client ID first
        client_name = request.data.get('username')


        # Initialize the boto3 Cognito IDP client
        client = settings.COGNITO_CLIENT

        try:
            # Create the user pool client
            response = client.create_user_pool_client(
                UserPoolId=user_pool_id,
                ClientName=client_name
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

        try:
            # Call Cognito to create the user
            response = client.sign_up(
                ClientId=app_client_id,
                Username=username,
                Password=password,
                UserAttributes=attributes
            )
            return Response(response, status=status.HTTP_201_CREATED)
        except client.exceptions.UsernameExistsException as e:
            # Handle exception
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Handle any other exception
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ConfirmRegistrationView(APIView):
    def post(self, request):
        
        #COGNITO_USER_POOL_ID = os.getenv('COGNITO_USER_POOL_ID')
        #user_pool_id = settings.COGNITO_USER_POOL_ID

        user_pool_id = "local_33DvJMdE"

        #Confirmation steps
        username = request.data.get('username')
        confirmation_code = request.data.get('confirmation_code')

        #FOR THE REAL CONFIRMATION CODE
        """client = settings.COGNITO_CLIENT
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
        
        client = settings.COGNITO_CLIENT
        
        try:
            response = client.confirm_sign_up(
                ClientId=app_client_id,
                Username=username,
                ConfirmationCode=confirmation_code
            )
        """
        #FAKE TIME
        client = settings.COGNITO_CLIENT
        try:
            response = client.admin_confirm_sign_up(
                UserPoolId=user_pool_id,
                Username=username)
            return Response({"message": "User confirmed successfully."}, status=status.HTTP_200_OK)
        except client.exceptions.UserNotFoundException:
            return Response({"error": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)
        except client.exceptions.CodeMismatchException:
            return Response({"error": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)
        except client.exceptions.ExpiredCodeException:
            return Response({"error": "Verification code has expired."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SignUpView(APIView):
    def post(self, request):
        # Extract the necessary information from the request
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        # ... extract other attributes as needed

        client = settings.COGNITO_CLIENT

        try:
            # Sign up the user to Cognito
            response = client.sign_up(
                ClientId='your-app-client-id',
                Username=username,
                Password=password,
                UserAttributes=[
                    {
                        'Name': 'email',
                        'Value': email
                    },
                    # ... specify other attributes
                ]
            )
            return Response(response, status=status.HTTP_201_CREATED)
        except client.exceptions.UsernameExistsException:
            return Response({"error": "This username already exists."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LoginView(APIView):
    def post(self, request):
        #COGNITO_USER_POOL_ID = os.getenv('COGNITO_USER_POOL_ID')
        #user_pool_id = settings.COGNITO_USER_POOL_ID

        user_pool_id = "local_33DvJMdE"

        # Initialize Cognito client
        client = settings.COGNITO_CLIENT
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
        client = settings.COGNITO_CLIENT
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
