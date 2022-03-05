from django.shortcuts import render, get_object_or_404

from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView)

# Create your views here.
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Country, Region, SubRegion, District
from .serializers import  CountrySerializer, RegionSerializer, SubRegionSerializer, DistrictSerializer

from rest_framework import viewsets

# class DistritosListView(ListCreateAPIView):
#     permission_classes = (AllowAny,)
#     queryset = DistritosLima.objects.filter(is_active=True)
#     serializer_class = DistritosLimaSerializer
#
#
# class DistritosDetailView(RetrieveUpdateDestroyAPIView):
#     permission_classes = (IsAuthenticated,)
#     queryset = DistritosLima.objects.filter(is_active=True)
#     serializer_class = DistritosLimaSerializer

class CountryView(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class RegionView(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class SubRegionView(viewsets.ModelViewSet):
    queryset = SubRegion.objects.all()
    serializer_class = SubRegionSerializer


class DistrictView(viewsets.ModelViewSet):
    queryset = District.objects.all()
    serializer_class = DistrictSerializer
