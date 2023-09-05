from django.shortcuts import render
from django.http import JsonResponse



# Create your views here.
def api_root(request):
    return JsonResponse({
        "auth-login": "/auth/login/",
        "auth-register": "/auth/register/",
        "auth-refresh": "/auth/refresh/",
        "user-list": "/user/",
    })

