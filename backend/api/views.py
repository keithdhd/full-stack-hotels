from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Hotel

from .serializers import HotelSerializer


class HotelViewSet(viewsets.ModelViewSet): # A ViewSet is a type of class-based view that doesn't provide method handlers such as .get() or .post(), but instead provides actions such as .list() and .create() that map to HTTP methods.
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)    
