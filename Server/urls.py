# urls.py

from django.contrib.auth import views as auth_views

urlpatterns = [
    # ... other URL patterns ...
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('register/', your_register_view, name='register'),  # Implement your registration view
]
