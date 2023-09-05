from core.user.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'created', 'updated')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}
        read_only_field = ['is_active', 'created', 'updated']