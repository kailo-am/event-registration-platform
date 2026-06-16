# Event Registration Platform

A full-stack Event Registration Platform built with Django REST Framework and React. Users can create accounts, authenticate using JWT, browse events, register for events, and view their registrations.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Events

* View All Events
* View Event Details
* Register for Events
* View My Registrations

## Tech Stack

### Backend

* Django
* Django REST Framework
* Simple JWT
* SQLite

### Frontend

* React
* Vite
* Axios
* React Router DOM

## API Endpoints

### Authentication

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | /api/register/ | Register a new user |
| POST   | /api/login/    | User login          |

### Events

| Method | Endpoint                   | Description             |
| ------ | -------------------------- | ----------------------- |
| GET    | /api/events/               | List all events         |
| GET    | /api/events/<id>/          | Event details           |
| POST   | /api/events/<id>/register/ | Register for an event   |
| GET    | /api/my-registrations/     | View user registrations |

## Installation

### Backend

```bash
git clone <repository-url>
cd event_registration_platform

python -m venv venv
source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

## Project Structure

```text
event_registration_platform/
│
├── accounts/
├── events/
├── backend/
├── frontend/
├── manage.py
├── requirements.txt
└── README.md
```

## Future Improvements

* Event search and filtering
* User profile management
* Event capacity limits
* Email notifications
* Deployment to cloud hosting

## Author

Amal
