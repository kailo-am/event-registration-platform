import os

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from events.models import Event


class Command(BaseCommand):
    help = "Seed the database with demo data"

    def handle(self, *args, **kwargs):

        if not User.objects.filter(username="admin").exists():

            username = os.getenv("DJANGO_SUPERUSER_USERNAME", "admin")
            email = os.getenv("DJANGO_SUPERUSER_EMAIL", "admin@example.com")
            password = os.getenv("DJANGO_SUPERUSER_PASSWORD", "admin123")

            User.objects.create_superuser(
                username=username,
                email=email,
                password=password,
            )

            self.stdout.write(
                self.style.SUCCESS("Admin user created.")
            )

        else:
            self.stdout.write("Admin user already exists.")
        

        if Event.objects.count() == 0:

            Event.objects.create(
                title="Python Workshop",
                description="Learn Django REST Framework",
                date="2026-07-10",
                location="Kozhikode"
            )

            Event.objects.create(
                title="AI Meetup",
                description="Introduction to Machine Learning",
                date="2026-07-15",
                location="Kochi"
            )

            Event.objects.create(
                title="Hackathon",
                description="24-hour coding challenge",
                date="2026-07-20",
                location="Bangalore"
            )

            self.stdout.write(
                self.style.SUCCESS("Sample events created.")
            )

        else:
            self.stdout.write("Events already exist.")