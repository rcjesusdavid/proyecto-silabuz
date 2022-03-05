from django.contrib.auth import authenticate
from authentication.models import User

from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import UserSerializer
from core.serializers import PostulantSerializer, CompanySerializer
from core.models import Postulant, Company


class UserListView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer


class LoginAPIView(APIView):
    """
    Login view.
    RETURNS Authentication Token.

    METHOD POST.
    Body.
    {
        "username": "",
        "password": "",
    }
    """
    permission_classes = (AllowAny,)

    def get_user_data(self, user):
        postulant = Postulant.objects.filter(
            user=user).first()  #
        company = Company.objects.filter(
            user=user).first()  #

        company_data = {}
        postulant_data = {}
        is_postulant = False
        is_company = False

        if postulant:
            is_postulant = True
            postulant_data = {"name": postulant.name, "last_name": postulant.last_name}

        if company:
            is_company = True
            company_data = {"bussisnes_name": company.bussines_name, "descripcion": company.description}

        user_data = {
            "user_id": user.id,
            "postulante": postulant_data,
            "empresa": company_data,
            "email": user.email,
            "is_staff": user.is_staff,
            "is_superuser": user.is_superuser,
            "is_postulant": is_postulant,
            "is_company": is_company,
        }

        return user_data

    def post(self, request):
        email = request.data.get("email", None)
        password = request.data.get("password", None)

        if email in ['', None]:
            return Response({"detail": "No se proporciono un nombre de usuario"},
                            HTTP_400_BAD_REQUEST)

        if password in ['', None]:
            return Response({"detail": "No se proporciono una contrasenha de usuario"},
                            HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)

        if not user:
            return Response({"detail": "Se proporcionaron credenciales invalidas"},
                            HTTP_400_BAD_REQUEST)

        token, _ = Token.objects.get_or_create(user=user)


        user_data = self.get_user_data(user)
        user_data["token"] = token.key
        return Response(data=user_data, status=HTTP_200_OK)


class SignUpPostulant(APIView):
    """
    Sign-up View. 
    RETURNS User Instance

    METHOD POST.
    Body.
    {
        "username": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "email": "",
    }
    """
    permission_classes = (AllowAny,)

    ## modificar para la creacion de los usuarios...!
    def post(self, request):
        name = request.data.get("name", None)
        last_name = request.data.get("last_name", None)
        email = request.data.get("email", None)
        password = request.data.get("password", None)
        # is_postulant = request.data.get("is_postulant", True)

        if email in ['', None]:
            return Response({"detail": "No se proporciono un email de usuario"},
                            HTTP_400_BAD_REQUEST)

        if password in ['', None]:
            return Response({"detail": "No se proporciono una contrasenha de usuario"},
                            HTTP_400_BAD_REQUEST)

        if name in ['', None]:
            return Response({"detail": "No se proporciono un nombre de usuario"},
                            HTTP_400_BAD_REQUEST)

        if last_name in ['', None]:
            return Response({"detail": "No se proporciono una apellido de usuario"},
                            HTTP_400_BAD_REQUEST)

        if len(password) < 6:
            return Response({"detail": "El password debe tener longitud de al menos 6 caracteres"},
                            HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email):
            return Response({"detail": "El email de usuario ya ha sido tomado"},
                            HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            email=email,
            password=password
        )

        postulant = PostulantSerializer(data={
            "user_id": user.id,
            "name": name,
            "last_name": last_name
        })

        if postulant.is_valid():
            postulant.save()

        user_data = {
            "name": postulant.data.get('name'),
            "last_name": postulant.data.get('last_name'),
            "email": user.email
        }

        return Response(data=user_data, status=HTTP_200_OK)


class SignUpCompany(APIView):
    """
    Sign-up View. 
    RETURNS User Instance

    METHOD POST.
    Body.
    {
        "username": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "email": "",
    }
    """
    permission_classes = (AllowAny,)

    ## modificar para la creacion de los usuarios...!
    def post(self, request):
        # first_name = request.data.get("first_name", "")
        # last_name = request.data.get("last_name", "")
        email = request.data.get("email", None)
        password = request.data.get("password", None)
        bussines_name = request.data.get("bussines_name", None)
        description = request.data.get("description", None)

        if email in ['', None]:
            return Response({"detail": "No se proporciono un email de usuario"},
                            HTTP_400_BAD_REQUEST)

        if password in ['', None]:
            return Response({"detail": "No se proporciono una contrasenha de usuario"},
                            HTTP_400_BAD_REQUEST)

        if len(password) < 6:
            return Response({"detail": "El password debe tener longitud de al menos 6 caracteres"},
                            HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email):
            return Response({"detail": "El email de usuario ya ha sido tomado"},
                            HTTP_400_BAD_REQUEST)

        if Company.objects.filter(bussines_name=bussines_name):
            return Response({"detail": "La razon social de la pompañia ya ha sido tomado"},
                            HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            email=email,
            password=password
        )

        company = CompanySerializer(data={
            "user_id": user.id,
            "bussines_name": bussines_name,
            "description": description
        })

        if company.is_valid():
            company.save()

        user_data = {
            "bussines_name": company.data.get('bussines_name'),
            "description": company.data.get('description'),
            "email": user.email
        }

        return Response(data=user_data, status=HTTP_200_OK)
