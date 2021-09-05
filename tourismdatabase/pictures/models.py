from django.db import models




class pictures(models.Model):
    title = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=1000)
    slug = models.SlugField(max_length=200, unique=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True,null=True)
    image1 = models.ImageField(upload_to='products/img1', blank=True,null=True)
    author = models.CharField(max_length=100,)
    updated_on = models.DateTimeField(auto_now= True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
   

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title