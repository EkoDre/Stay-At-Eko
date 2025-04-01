# Project Proposal: Stay at Eko

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
  - User authentication (signup/login)
- Clean UI for adding/viewing listings
- Responsive layout for desktop and mobile
- Booking system (select dates, show total price)

## Stretch Goals
- accept payments
- Image upload
- Filter by location or price
- Save (favorite) listings
- algorithm for users 

## Technologies

- Node.js + Express
- MongoDB + Mongoose
- HTML /EJS / CSS / JavaScript


## Planning

- Trello Board: [Trello link here]
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

 Authentication Details
- Session-based authentication using express-session
- Passwords are hashed using bcrypt
- req.session.userId is used to track the logged-in user
- Middleware protects private routes:
 

 Booking post route details:

- Converting date strings to Date objects.  - checkInDate (string, e.g., "YYYY-MM-DD") checkOutDate (string, e.g., "YYYY-MM-DD")


- Validating the date formats.

dateIn  = new Date(checkInDate)
dateOut = new Date(checkOutDate)


- Ensuring the check-out date is after the check-in date.

if (dateIn is invalid OR dateOut is invalid) then
    Return error: "Invalid date format"
else if (dateOut <= dateIn) then
    Return error: "Check-out date must be after check-in date"






- Creating the booking if validations pass.

 If all validations pass
Create new booking with:
   userId (from session)
  listingId
   checkInDate: dateIn
  checkOutDate: dateOut

Return success (confirmation) message with booking details




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

 USER AUTH:
  Let users sign up and log in
  Save session
  Allow users to only edit/delete their own listings


Booking Schema:

Booking {
  
  userId:      ObjectId,    // Required: Reference to the User who booked
  
  listingId:   ObjectId,    // Required: Reference to the Listing being booked
  
  checkInDate: Date,        // Required: Check-in date
  
  checkOutDate: Date        // Required: Check-out date
  
}


## ERD 

![ERD Diagram](https://github.com/EkoDre/Stay-At-Eko/blob/main/Assets/ERD%20diagram%20.png) 


## Wireframes


![Stay at Eko Wireframes](https://github.com/EkoDre/Stay-At-Eko/blob/main/Assets/stayekoWireframe.png)


## Logo

![Stay at Eko Preview](https://github.com/EkoDre/Stay-At-Eko/blob/main/Assets/StayatEkopreview.png)



## Timeline

| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Monday      |   | proposal and approval             |          |      approval!  |
| Tuesday     |   | planning and setup                |          |connect database |
| Wednesday   |   | crud routes                       |          | dont overthink  |
| Thursday    |   |      auth                         |          |getting somewhere|
| Friday      |   | booking system                    |          |   cool details  |
| Saturday    |   | Finaliz MVP / css touches         | friends  |  feel better    |
| Sunday      |   | read over and test                | friends  |  you did it     |
| Monday      |   | Presentation                      |          |  be great       |


