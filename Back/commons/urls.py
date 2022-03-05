# from django.urls import path
#
# from .views import (DistritosListView, DistritosDetailView)
#
# urlpatterns = [
#     # Distritos
#     path("distritos/", DistritosListView.as_view(), name="distritos"),
#     path("distritos/<int:pk>/", DistritosDetailView.as_view(),
#          name="distritos-detail"),
#
# ]

from rest_framework import routers

from .views import CountryView, RegionView, SubRegionView, DistrictView

router = routers.DefaultRouter()
router.register('country', CountryView)
router.register('region', RegionView)
router.register('subregion', SubRegionView)
router.register('district', DistrictView)
urlpatterns = router.urls
