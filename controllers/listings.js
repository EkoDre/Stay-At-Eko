import express from 'express';
import Listing from '../models/listing.js';
const router = express.Router();


router.get('/', async (req, res) => {
    const listings = await Listing.find({owner: req.session.user._id});
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
    const listing = await Listing.create({ city, price, description, owner: req.session.user._id });
  
    // Redirect to the listings index page
    res.redirect("/listings");
  });
  
    // rout for editing listing
  router.get("/:id/edit", async (req, res) => {
    const id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
  });


// update listing in db
  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { city, price, description } = req.body;
    await Listing.findByIdAndUpdate(id, { city, price, description });
    res.redirect(`/listings/${id}`);
  });

// Show a single listing page
router.get('/:id', async (req, res) => {
  try {
    // Find the listing in the database by ID from the URL
    const listing = await Listing.findById(req.params.id);

    // If no listing is found, send a 404 error
    if (!listing) return res.status(404).send('Listing not found');

    // Render the 'show' view and pass in the listing and user session
    res.render('listings/show', {
      listing,
      user: req.session.user // this lets you show Edit/Delete buttons if user owns it
    });
  } catch (err) {
    console.error(err);
    res.redirect('/listings');
  }
});


// Delete a listing by ID
router.delete('/:id', async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect('/listings');
  } catch (err) {
    console.log(err);
    res.redirect('/listings');
  }
});



export default router;
  