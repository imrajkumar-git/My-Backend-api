





from django.contrib import admin
from .models import pictures

class picturesAdmin(admin.ModelAdmin):
    list_display = ('title', 'name', 'slug','created_on')
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
  
admin.site.register(pictures, picturesAdmin)