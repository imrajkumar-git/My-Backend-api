from django.shortcuts import render
from .models import Product
def shop(request):
    context = {
        'products':Product.objects.all()
    }
  
    return render(request,'index.html',context)


    