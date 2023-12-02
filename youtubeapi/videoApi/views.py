# views.py
import json
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.http import require_GET

class GetVideoAPI(APIView):

    def get(self, request, *args, **kwargs):
        query = request.GET.get('query', '')
    
        if query:
            try:
                api_url = 'https://www.googleapis.com/youtube/v3/playlistItems'
                params = {
                'key': 'AIzaSyBXYgQQCIozjytEaHTsbMoxZIOe3JvAy0w',
                'part': 'snippet',
                'playlistId': 'PLiyEr0aJ6DWfLFx-KvOHlDJiLI-T0YJtk',
                }
                response = requests.get(api_url, params=params)
                response_data = response.json()

                videos = response_data.get('items', [])[:10]

                return Response({'videos': videos})
            except Exception as e:
                return Response({'error': f'Error fetching videos from YouTube: {str(e)}'}, status=500)
        else:
            return Response({'error': f'Error fetching videos from YouTube: {str(e)}'}, status=500)

