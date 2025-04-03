import express from 'express';

const router = express.Router();


router.post('/', (req, res) => {
  
  res.render('bookings/index.ejs', {
    user: req.session.user,
    
  });

});

export default router;

