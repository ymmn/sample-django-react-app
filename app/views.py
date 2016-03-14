import json
import requests

from django.shortcuts import render


def index(request):
    state = {'message': 'Hello from Redux and Django!'}
    rendered_content = requests.post('http://localhost:3000', data=state).text

    return render(request, 'index.html', {
        'content': rendered_content,
        'state': json.dumps(state),
    })
