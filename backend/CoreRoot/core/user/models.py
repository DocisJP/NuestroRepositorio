from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not username:
            raise ValueError("Users must have a username")
        
        if not email:
            raise ValueError("Users must have an email address")
        user = self.model(username = username, email=self.normalize_email(email), **extra_fields)
        user.set_password(password) # encrypts the password
        user.save(using=self._db) # use the default db
        
        return user

    def create_superuser(self, username, email, password):
        """Creates and saves a new superuser"""
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email address.')
        if username is None:
            raise TypeError('Superusers must have a username.')
        user = self.create_user(username, email, password) # use the create_user function
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user
    

class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True) # is the user active
    is_staff = models.BooleanField(default=False) # is the user a staff member
    is_superuser = models.BooleanField(default=False) # is the user an admin

    USERNAME_FIELD = 'email' # use email as the username
    REQUIRED_FIELDS = ['username'] # required fields for creating a user

    objects = UserManager() # use the UserManager class

    def __str__(self):
        return self.email # return the email as the string representation of the user

    def tokens(self):
        return '' # return an empty string for now