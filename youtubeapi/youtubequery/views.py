# views.py
import json
import requests
from django.http import JsonResponse
from django.views.decorators.http import require_GET

@require_GET
def search(request):
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

            return JsonResponse({'videos': videos})
        except Exception as e:
            return JsonResponse({'error': f'Error fetching videos from YouTube: {str(e)}'}, status=500)

    return JsonResponse({'videos': []})
