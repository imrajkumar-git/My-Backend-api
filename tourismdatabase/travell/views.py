from django.shortcuts import render
from .forms import ImageForm

# Create your views here.
def index(request):
    return render(request, "index.html")


def showimage(request):

    lastimage= Image.objects.last()

    imagefile= lastimage.imagefile


    form= ImageForm(request.POST or None, request.FILES or None)
    if form.is_valid():
        form.save()

    
    context= {'imagefile': imagefile,
              'form': form
              }
    
      
    return render(request, 'Blog/images.html', context)