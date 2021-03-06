from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('authentication.urls')),
    path('console-jobs/', include('core.urls')),
    path('commons/', include('commons.urls')),
]
