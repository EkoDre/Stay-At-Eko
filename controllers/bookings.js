import express from 'express';

const router = express.Router();

// Spacing and try catch - using the formatter would help you
router.post('/', (req, res) => {
  
  res.render('bookings/index.ejs', {
    user: req.session.user,
    
  });

});

export default router;

