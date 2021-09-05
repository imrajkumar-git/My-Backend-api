from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def calculator(request):
    return render(request, 'home.html' , {'first':'Rajkumar','last':'Aryal','address':'kathmandu','contact':'9876543456','email':'rajkumar4@gmail.com'})
    

def add(request):
        val1 = int(request.GET['num1'])
        val2 = int(request.GET['num2'])
        res = val1+val2
        return render(request, "result.html", {'result':res})





    
      