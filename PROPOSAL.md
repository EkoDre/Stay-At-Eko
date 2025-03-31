# Project Proposal: Stay at Eko

## Problem Statement

Finding and sharing short-term rental spaces can be tricky without a centralized platform. “Stay at Eko” solves this by offering a clean, simple way to list and browse affordable stays — inspired by Airbnb, but simplified.

## App Overview

Stay at Eko is a web app where users can:
- View all available rental listings
- Add a new listing with name, location, price, description, and optional image
- Edit or delete listings

The app will be built using the MEN stack and follow full CRUD functionality.

## Core Features (MVP)

- Full CRUD for listings:
  - Create: Add a new listing
  - Read: See all listings
  - Update: Edit an existing listing
  - Delete: Remove a listing
- Clean UI for adding/viewing listings
- Responsive layout for desktop and mobile

## Stretch Goals

- User authentication (signup/login)
- Image upload
- Booking system (select dates, show total price)
- Filter by location or price
- Save (favorite) listings

## Technologies

- Node.js + Express
- MongoDB + Mongoose
- HTML /EJS / CSS / JavaScript


## Planning

- Trello Board: [insert your Trello link here]
- ERD and wireframes are included on Trello

## Pseudo-code

START the server
CONNECT to the MongoDB database

DEFINE the "Listing" model with:
  - name
  - location
  - pricePerNight
  - description
  - imageUrl (optional)

SETUP routes for:
  - GET /listings         → fetch all listings
  - GET /listings/:id     → fetch a single listing
  - POST /listings        → create a new listing
  - PUT /listings/:id     → update a listing
  - DELETE /listings/:id  → delete a listing

HOME PAGE:
  When user visits the homepage
    Fetch all listings from the database
    Display each listing (name, location, price, image)

ADD LISTING:
  When user clicks "Add Listing"
    Show a form for name, location, price, description, image
    On submit:
      Save the listing to the database
      Redirect to homepage

EDIT LISTING:
  When user clicks "Edit"
    Fetch listing data by ID
    Show form pre-filled with data
    On submit:
      Update listing in the database
      Redirect to homepage or listing details

DELETE LISTING:
  When user clicks "Delete"
    Delete listing from the database
    Redirect to homepage

(OPTIONAL) IMAGE DISPLAY:
  If image URL is provided
    Show image
  Else
    Show default image

(OPTIONAL) USER AUTH:
  Let users sign up and log in
  Save session
  Allow users to only edit/delete their own listings



## Wireframes

Click the link below to view the wireframes for the app layout and main pages:

[📄 View Stay at Eko Wireframes (PDF)](./assets/airbnb-wireframe.pdf)


## Logo

![Stay at Eko Preview](https://github.com/EkoDre/Stay-At-Eko/blob/main/Assets/StayatEkopreview.png)

