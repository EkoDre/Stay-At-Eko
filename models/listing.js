import mongoose from "mongoose"; // imported from mongoose

const listingSchema = new mongoose.Schema({
  city: { type: String, required: true },         // e.g. Tokyo
  price: { type: Number, required: true },        // e.g. 150
  description: { type: String, required: true },  // e.g. Cozy room in central Tokyo
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
