from django.db import models
from crum import get_current_user

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _


class ConsoleJobsAbstractClass(models.Model):
    class Meta:
        verbose_name = "ConsoleJobs Abstract Class"
        abstract = True

    is_active = models.BooleanField(
        default=True,
        verbose_name=("Is active")
    )
    created = models.DateField(
        auto_now=True,
        verbose_name=("Created")
    )
    updated = models.DateField(
        auto_now=True,
        verbose_name=("Updated")
    )
    updated_by = models.ForeignKey(
        'authentication.User',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="+",
        verbose_name=("Updated By")
    )
    created_by = models.ForeignKey(
        'authentication.User',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="+",
        verbose_name=("Updated By")
    )

    def save(self, *args, **kwargs):
        user = get_current_user()
        if user and not user.pk:
            user = None
        if not self.pk:
            self.created_by = user
        self.updated_by = user

        super(ConsoleJobsAbstractClass, self).save(*args, **kwargs)

    def delete(self):
        self.is_active = False
        self.save()


class Profile(ConsoleJobsAbstractClass):
    class Meta:
        verbose_name = "Profile Abstract Class"

    user = models.ForeignKey(
        'authentication.User',
        on_delete=models.CASCADE,
        verbose_name=("User")
    )


class UserManager(BaseUserManager):
    ### Para la creacion del Usuarios del sistema. Trae datos del models USER .

    def create_user(self, email,  password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    ### Para la creacion del Superuser. Se hace desde consola.
    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_active = True
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        max_length=155,
        unique=True,
        verbose_name=_("Email")
    )
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def _str_(self):
        return self.email


    # @property
    # def is_admin(self):
    #     return self.is_admin
