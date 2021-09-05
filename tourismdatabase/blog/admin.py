





from django.contrib import admin
from .models import blogs

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'name', 'slug', 'status','created_on')
    list_filter = ("status",)
    search_fields = ['title', 'content', 'content1']
    prepopulated_fields = {'slug': ('title',)}
  
admin.site.register(blogs, PostAdmin)