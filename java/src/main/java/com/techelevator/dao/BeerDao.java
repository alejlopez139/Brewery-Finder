package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Beer;

public interface BeerDao {
    List<Beer> getAllBeers();

    boolean createBeer(int beer_id, String beer_name, int brewery_id);

    Beer getBeerById(int beer_id);

    void updateBeer(Beer beer);

    void deleteBeer(int beer_id);

    List<Beer> getBeerByUserId(int user_id);

    List<Beer> getAllBeersByBreweryId(int brewery_id);

}
