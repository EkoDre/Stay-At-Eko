import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import mongoose from 'mongoose';
import methodOverride from 'method-override';
import morgan from 'morgan';
import session from 'express-session';
import path from 'path';
import authController from './controllers/auth.js';
import listingsController from './controllers/listings.js';
import homeController from './controllers/home.js';
import bookingsController from './controllers/bookings.js'
const port = process.env.PORT ? process.env.PORT : '3000';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bookings', bookingsController);
app.use('', homeController);
app.use('/auth', authController);
app.use('/listings', listingsController);
app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
