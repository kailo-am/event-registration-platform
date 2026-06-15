from django.urls import path
from .views import EventListView, EventDetailView , RegisterForEventView



urlpatterns = [    path('events/', EventListView.as_view(), name='event-list'),
                   path('events/<int:pk>/', EventDetailView.as_view(), name='event-detail'),
                     path('events/<int:pk>/register/', RegisterForEventView.as_view(), name='event-register'),
]