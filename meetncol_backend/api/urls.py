# api/urls.py
from .views import ProfileView

urlpatterns += [
    path('profile/<int:pk>/', ProfileView.as_view(), name='profile'),
]

