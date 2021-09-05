from django.urls import path
from .views import ProductView,categoryView,ProductDetails,categoryDetails

app_name = 'shop_api'

urlpatterns = [
    path('products/', ProductView.as_view(), name='products'),
    path('products/<int:pk>/',ProductDetails.as_view(),name='productsdetails'),
    path('categories/', categoryView.as_view(), name='categories'),
    path('categories/<int:pk>',categoryDetails.as_view(),name='categoryDetails'),
]