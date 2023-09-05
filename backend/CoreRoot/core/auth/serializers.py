from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist

from core.user.serializers import UserSerializer
from core.user.models import User

class LoginSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['user'] = UserSerializer(self.user).data
        update_last_login(None, self.user)

        if api_settings.UPDATE_LAST_LOGIN:
            self.user.last_login(None, self.user)

        return data


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)
    email = serializers.EmailField(max_length=255, min_length=4, write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'is_active')

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data['email'])
            raise serializers.ValidationError({'email': 'Email already exists'})
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user
