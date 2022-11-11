package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Review;

public interface ReviewDao {
    List<Review> getAllReviews();

    void createReview(Review review);

    Review getReviewByUserId(int user_id);

    void updateReview(Review review);

    void deleteReview(int user_id);

    List<Review> getReviewByBeerName(String beer_name);


}
