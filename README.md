# TSFlightsApp

## Description
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.  
This app is built for learning purposes only.  
The frontend of this flights app provides an interface to allow you to search for flights according to origin and destination. It lets you create new flights to be displayed in the main panel, and it can also update or delete those flights.

ps. Logo created by myself

### Backend
Link: https://github.com/MJYin-1417/TSFlights-backend

## Interfaces:

### Home Interface: 
<img
  src="/home.png"
  alt="Home"
  title="Home Page"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

### Create Interface: 
<img
  src="/create.png"
  alt="Create"
  title="Create Page"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
 
### Update Interface: 
<img
  src="/update.png"
  alt="Create"
  title="Update Page"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

### RESTful API endpoints:
  - `GET /flights` - Get all the flights
  - `POST /flights` - Post a flight
  - `GET /flights/:id` - Get one flight
  - `PATCH /flights/:id/update` - Update one flight
  - `DELETE /flights/:id/delete` - Delete one flight

### Other API endpoints:
  - `GET /flights/query/:orig/:dest` - Get all flights with corresponding origin and destination
  - `GET /flights/cities/origins` - Get all distinct origins from all flights
  - `GET /flights/cities/destinations` - Get all distinct destinations from all flights

## Tech:
Typescript, Angular, NestJS, PostgreSQL, Bootstrap



