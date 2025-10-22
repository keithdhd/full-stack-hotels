# Full-Stack Hotels Application

A modern full-stack web application for managing hotel listings, built as a learning project to demonstrate proficiency in React, Django REST Framework, and full-stack development principles.


## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Documentation](#api-documentation)
- [Development](#development)

## Overview

This project demonstrates a complete full-stack application with a React frontend and Django REST Framework backend. Users can create, view, and manage hotel listings with a clean, modern interface that includes theme switching capabilities.

## Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library with latest features
- **Vite 7.1.7** - Next-generation frontend tooling for fast development
- **Styled Components 6.1.19** - CSS-in-JS for component-level styling
- **pnpm** - Fast, disk space efficient package manager

### Backend
- **Django 5.2.7** - High-level Python web framework
- **Django REST Framework 3.16.1** - Powerful toolkit for building Web APIs
- **SQLite** - Lightweight database for development
- **django-cors-headers 4.9.0** - Handle Cross-Origin Resource Sharing

### Additional Tools
- **ESLint** - Code quality and consistency
- **PyMongo 4.14.1** - MongoDB driver (ready for future scaling)

## Features

### Current Features
- Create new hotel listings with name, description, and price
- View all hotels in a responsive card layout
- RESTful API with Django REST Framework
- Light/Dark theme toggle
- Real-time price calculation
- Clean, modern UI with Styled Components
- CORS-enabled API for seamless frontend-backend communication

### In Development
- Edit and delete hotel functionality
- Image upload for hotels
- Search and filter capabilities
- User authentication and authorization
- Booking system

## Project Structure

```
full-stack-hotels/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── containers/      # Container components
│   │   ├── context/         # React Context providers
│   │   ├── services/        # API service layer
│   │   ├── App.jsx          # Main application component
│   │   └── main.jsx         # Application entry point
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
│
└── backend/                 # Django backend application
    ├── api/                 # API application
    │   ├── models.py        # Hotel data model
    │   ├── serializers.py   # DRF serializers
    │   ├── views.py         # API viewsets
    │   └── urls.py          # API routing
    ├── backend/             # Django project settings
    │   ├── settings.py      # Configuration
    │   └── urls.py          # Main URL routing
    ├── manage.py            # Django management script
    └── requirements.txt     # Python dependencies
```

## Getting Started

### Prerequisites

- **Python 3.8+** installed on your system
- **Node.js 18+** and **pnpm** installed
- Basic knowledge of React and Django

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser (optional, for admin panel):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

   The backend will be available at `http://localhost:8000`
   Django REST Framework browsable API: `http://localhost:8000/api/`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

   The frontend will be available at `http://localhost:5173`

## API Documentation

### Base URL
```
http://localhost:8000/api/
```

### Endpoints

#### Get All Hotels
```http
GET /api/hotels/
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "EXE Hotel",
    "description": "A comfortable hotel in the city center",
    "price": "150.00"
  }
]
```

#### Get Single Hotel
```http
GET /api/hotels/{id}/
```

#### Create Hotel
```http
POST /api/hotels/
Content-Type: application/json

{
  "name": "Grand Hotel",
  "description": "Luxury accommodation with ocean view",
  "price": 250.00
}
```

#### Update Hotel
```http
PUT /api/hotels/{id}/
Content-Type: application/json

{
  "name": "Grand Hotel Updated",
  "description": "Updated description",
  "price": 275.00
}
```

#### Delete Hotel
```http
DELETE /api/hotels/{id}/
```

### Django Admin Panel

Access the admin panel at `http://localhost:8000/admin/` to manage hotels directly through Django's built-in interface.

## Development

### Frontend Development

**Available Scripts:**
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

**Key Technologies:**
- **Theme Context**: Global theme state management for light/dark mode
- **Styled Components**: Dynamic styling based on theme
- **React Hooks**: Modern state management with useState

### Backend Development

**Key Components:**

1. **Models** (`api/models.py`):
   - `Hotel` model with name, description, and price fields

2. **Serializers** (`api/serializers.py`):
   - `HotelSerializer` for data validation and serialization

3. **ViewSets** (`api/views.py`):
   - `HotelViewSet` provides CRUD operations via REST API

4. **URL Routing** (`api/urls.py`):
   - DefaultRouter automatically generates RESTful URLs

**CORS Configuration:**
- Configured to allow requests from `http://localhost:5173` (Vite dev server)
- Adjust in `backend/settings.py` for production deployment

