import express from 'express';
import Listing from '../models/listing.js';
const router = express.Router();


router.get('/', (req, res) => {
     Listing.find() .limit(3) .then(listings => {
  res.render('index.ejs', {
    user: req.session.user,
    listings
  });
});
});

export default router;

