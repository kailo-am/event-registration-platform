from rest_framework import generics
from .models import Event
from .serializers import EventSerializer, RegistrationSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from .models import Registration

# Create your views here.


class EventListView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailView(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    
class RegisterForEventView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        event = Event.objects.get(pk=pk)
        
        registration, created = Registration.objects.get_or_create(
            event=event, 
            user=request.user)

        if not created:
        
            return Response(
                {"detail": "You are already registered for this event."},
                status=status.HTTP_400_BAD_REQUEST
        )
        return Response(
            {"detail": "You have successfully registered for the event."},
            status=status.HTTP_201_CREATED
        )
    
class MyRegistrationsView(generics.ListAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Registration.objects.filter(user=self.request.user)