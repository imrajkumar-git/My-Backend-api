from django.contrib import admin
from .models import category
from .models import Product
# admin.site.register(Category
admin.site.register(category)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'image')
    list_filter = ("id",)
    search_fields = ['title', 'id']
    
  
admin.site.register(Product, ProductAdmin)




