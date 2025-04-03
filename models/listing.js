import mongoose from "mongoose"; // imported from mongoose

const listingSchema = new mongoose.Schema({
  city: { type: String, required: true },         
  price: { type: Number, required: true },        
  description: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }   
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
