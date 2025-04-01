import express from 'express';
import Listing from '../models/listing.js';
const router = express.Router();


router.get('/', async (req, res) => {
    const listings = await Listing.find({});
    res.render('listings/index',{listings,user:req.session.user});
  }); 

  // Show the form to add a new listing
router.get("/new", (req, res) => {
    res.render("listings/new"); // Renders views/listings/new.ejs
  });
  
  // Create a new listing
  router.post("/", async (req, res) => {
    const { city, price, description } = req.body;
  
    // Create listing in the database
    const listing = await Listing.create({ city, price, description });
  
    // Redirect to the listings index page
    res.redirect("/listings");
  });
  
    // rout for editing listing
  router.get("/listings/:id/edit", async (req, res) => {
    const id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
  });


// update listing in db
  router.put("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const { city, price, description } = req.body;
    await Listing.findByIdAndUpdate(id, { city, price, description });
    res.redirect(`/listings/${id}`);
  });
  



  export default router;