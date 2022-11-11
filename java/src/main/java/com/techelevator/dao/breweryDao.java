package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Brewery;

public interface breweryDao {
    List<Brewery> getAllBreweries();

    void addNewBrewery(Brewery brewery);

    Brewery getBreweryById(Long breweryId);

    void updateBrewery(Brewery brewery);

    void deleteBrewery(Long breweryId);

    List<Brewery> getBreweryByUserId(Long userId);
}
