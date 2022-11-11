package com.techelevator.controller;


import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ReviewController {

    @Autowired
    com.techelevator.dao.ReviewDao reviewDao;

    public ReviewController(ReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }


    //Returns list of all reviews
    @PreAuthorize("permitAll")
    @RequestMapping(path = "/reviews", method = RequestMethod.GET)
    public List<Review> getAllReviews(){
        return reviewDao.getAllReviews();
    }

    //Returns review by userID
    @PreAuthorize("permitAll")
    @RequestMapping(path = "/users/{userId}/review", method = RequestMethod.GET)
    public Review getReviewByUserId(@PathVariable int user_id) throws NotFoundException {
        return reviewDao.getReviewByUserId(user_id);
    }

    //Add a new review
    //This needs to limited to just "Admin" users
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/review", method = RequestMethod.POST)
    public void addNewBrewery(@RequestBody Review aSingleReview) throws NotAllowedException {
        reviewDao.createReview(aSingleReview);
    }

    //Update review
    //@PreAuthorize("hasRole('ROLE_USER')")
    @RequestMapping(path = "/review", method = RequestMethod.PUT)
    public void updateReview(@RequestBody Review aSingleReview) throws NotAllowedException {
        reviewDao.updateReview(aSingleReview);
    }

    //Delete a review
    //Only admin can do this
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/review/{userId}", method = RequestMethod.DELETE)
    public void deleteReview(@PathVariable int user_id) throws NotAllowedException {
        reviewDao.deleteReview(user_id);
    }

}
