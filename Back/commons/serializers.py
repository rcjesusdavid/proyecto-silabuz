"""Commons serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from .models import (Gender, DocumentType, Country, Region, SubRegion, District, )


class GenderSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Gender
        fields = ('id', 'short_name', 'long_name')


class DocumentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentType
        fields = ('id', 'long_name', 'short_name', 'character_length')


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'
        read_only_fields = [

        ]


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'
        read_only_fields = [

        ]


class SubRegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubRegion
        fields = '__all__'
        read_only_fields = [

        ]


class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = '__all__'
        read_only_fields = [

        ]