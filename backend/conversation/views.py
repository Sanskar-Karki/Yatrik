from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from yatrik import settings
from django.core.mail import send_mail
from django .contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
#from .tokens import generate_token
from django.core.mail import EmailMessage, send_mail
import json
from django.http import JsonResponse
# Create your views here.

def home(request):
    return render(request, 'home.html')
@csrf_exempt
def signup(request):

    if request.method == "POST":
       # username = request.POST.get('username')
       data = json.loads(request.body)
       username = data.get('username')
       email = data.get('email')
       password = data.get('password1')
       password = data.get('password2')
       print(username)

       if User.objects.filter(username = username):
           messages.error(request, "Username already exists!")
           return redirect('home')
       
       if User.objects.filter(email=email):
           messages.error(request, "Email already registered")
           return JsonResponse({"error":"Success"},status=201)
       
       
       

       myuser = User.objects.create_user(username=username, email=email, password=password)
      
       print(password)
       print("before saving")
       #myuser.is_active = False
       myuser.save()
       print("after saving")
    # User.objects.create_user(username, email, password1)

    return JsonResponse({'message': 'success'}, status=200)
    
    return JsonResponse({'message': 'error', 'error': 'Invalid request method'}, status=405)

       # Email Confirmation Email

    #    current_site = get_current_site(request)
    #    print("Domain:", current_site.domain)
    #    email_subject = "Confirm your email @ Yatrik "
    #    message2= render_to_string('email_confirmation.html', {
    #        'name': myuser.first_name,
    #        'domain': current_site.domain,
    #        'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
    #        'token': generate_token.make_token(myuser)
    #    })
    #   # email = EmailMessage(
    #   #     email_subject, 
    #   #     message2,
    #   #     settings.EMAIL_HOST_USER,
    #    #    [myuser.email],
    #   # )
    #   # email.body = message2
    #   # email.fail_silently = True
    #   # email.send()
    #    send_mail(
    #        email_subject,
    #        message2,
    #        settings.EMAIL_HOST_USER,
    #        [myuser.email],
    #        fail_silently=True,
    #    )
    # return JsonResponse({'message':'success'}, status=200)


# def signin(request):

#     if request.method == 'POST':
#         data = json.loads(request.body)
#         username = data.get('username')
#         pass1 = data.get('pass1')
#         username = request.POST['username']
#         pass1 = request.POST['pass1']

#         user = authenticate(username=username, password = pass1)

#         if user is not None:
#             login(request, user)
#             fname= user.first_name
#             #return render(request, "authentication/index.html", {'fname': fname})
#             return JsonResponse({'message':'success'}, status=200)

#         else:
#             messages.error(request, "Badd credentials")
#             return redirect('home')

#     return render(request, "authentication/signin.html")

# # @csrf_protect
@csrf_exempt
def signin(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password1')
        # password = data.get('password2')

        
        print(password)

        myuser = auth.authenticate(request, username=username, password=password)
        if myuser is not None:
            auth.login(request,myuser)
            print("Hello")
            
            return JsonResponse({"Message": "Success"}, status= 200 )
            
        else:
            return JsonResponse({"error":"Invalid Credentials"},status=401)

    
    # @csrf_exempt
    # def signin(request):
    #     if request.method == 'POST':
    #         data = json.loads(request.body)
    #         username = data.get('username')
    #         password = data.get('password1')

    #         myuser = auth.authenticate(request, username=username, password=password)

    #         if myuser is not None:
    #             auth.login(request, myuser)
    #             print("Hello")
    #             return JsonResponse({"Message": "Success"}, status=200)

    #         else:
    #             return JsonResponse({"error": "Invalid Credentials"}, status=401)