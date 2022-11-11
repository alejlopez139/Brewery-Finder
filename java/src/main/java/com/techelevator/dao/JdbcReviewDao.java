package com.techelevator.dao;


import com.techelevator.model.Beer;
import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@Component
public class JdbcReviewDao implements ReviewDao {

    private JdbcTemplate jdbcTemplate;


    @Override
    public List<Review> getAllReviews() {
        List<Review> allReviews = new ArrayList<>();
        String sqlGetAllReviews = "SELECT * FROM Review";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllReviews);

        while (results.next()) {
            Review aSingleReview = mapRowToReview(results);
            allReviews.add(aSingleReview);
        }
        return allReviews;
    }

    @Override
    public void createReview(Review aSingleReview) {
        String sqlAddReview = "INSERT INTO Review (user_id, username, beer_id, beer_name VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sqlAddReview, aSingleReview.getUser_ID(), aSingleReview.getUsername(),
                aSingleReview.getBeer_ID(), aSingleReview.getBeer_Name());
    }

    @Override
    public Review getReviewByUserId(int user_id) {
        String sqlGetReviewByUserId = "SELECT * FROM reviews INNER JOIN ON review.user_id = users.user_id";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetReviewByUserId, user_id);
        //this basically says that the review for that specific user was not found, correct?
        if(results.next()) {
            return mapRowToReview(results);
        } else {
            throw new RuntimeException("review "+user_id+" was not found.");
        }
    }

    @Override
    public void updateReview(Review aSingleReview) {
        String sqlUpdateReviewByUserId = "UPDATE Review SET username = ?, Beer_ID = ?,Beer_Name = ? WHERE User_ID = ?";
        jdbcTemplate.update(sqlUpdateReviewByUserId, aSingleReview.getBeer_Name(), aSingleReview.getBeer_ID(),
                aSingleReview.getUsername(), aSingleReview.getUser_ID());

    }

    @Override
    public void deleteReview(int user_id) {
        //deletes a review
        String sqlDeleteReview = "DELETE FROM Review WHERE user_id = ?";
        jdbcTemplate.update(sqlDeleteReview, user_id);

    }

    @Override
    public List<Review> getReviewByBeerName(String beer_name) {
        List<Review> getReviewByBeerName = new ArrayList<>();
        String sqlGetReviewByBeerName = "SELECT * FROM review INNER JOIN ON beer.beer_id = review.beer_id";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetReviewByBeerName, beer_name);
        return getReviewByBeerName;
    }

    private Review mapRowToReview(SqlRowSet row) {
        Review newReview = new Review();
        newReview.setUser_ID(row.getInt("user_id"));
        newReview.setUsername(row.getString("username"));
        newReview.setBeer_Name(row.getString("beer_id"));
        newReview.setBeer_ID(row.getInt("beer_id"));
        return newReview;
    }
}
