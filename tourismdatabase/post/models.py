from django.db import models

class tourism(models.Model):
# Create your models here.
    name=models.CharField(max_length=100,default="Trekking Shoes",null=False,blank=False)
    img= models.ImageField(upload_to='templates')
    desc= models.TextField()
    price=models.FloatField(default=1000.0,null=False,blank=False)
    offer=models.BooleanField(default=False)
