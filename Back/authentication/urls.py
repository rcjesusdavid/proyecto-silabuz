from django.urls import path, re_path

from .views import LoginAPIView, SignUpPostulant,SignUpCompany, UserListView

urlpatterns = [
    re_path(r'^login/', LoginAPIView.as_view(), name='user-login'),
    path('signup/postulant/', SignUpPostulant.as_view(), name='user-login'),
    path('signup/company/', SignUpCompany.as_view(), name='user-login'),
    path('users/', UserListView.as_view(), name='users'),
]
