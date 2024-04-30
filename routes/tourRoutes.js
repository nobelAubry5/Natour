const express = require('express');
const tourController = require('./../controllers/tourController');
// or
// const {getAllTours,createTour,getTour,updateTour,deleteTour} = require('./../controllers/tourController');
const router = express.Router();

// Param middleware
router.param('id', tourController.checkId);

// Routes
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
