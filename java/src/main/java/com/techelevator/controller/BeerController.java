package com.techelevator.controller;

import com.techelevator.dao.BeerDao;
import com.techelevator.model.Beer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BeerController {

    @Autowired
    com.techelevator.dao.BeerDao beerDao;

    public BeerController(BeerDao beerDao) {
        this.beerDao = beerDao;
    }


    //Returns list of all beers
    @PreAuthorize("permitAll")
    @RequestMapping(path = "/beers", method = RequestMethod.GET)
    public List<Beer> getAllBeers() {
        return beerDao.getAllBeers();
    }


    //Returns beer by beerID
    @PreAuthorize("permitAll")
    @RequestMapping(path = "/beer/{beerId}", method = RequestMethod.GET)
    public Beer getBeerById(@PathVariable int beer_id) throws NotFoundException {
        return beerDao.getBeerById(beer_id);
    }

    //Add a new beer
    //This needs to limited to just "Admin" users
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/beer/{breweryId}", method = RequestMethod.POST)
    public void addNewBeer(@RequestBody int beer_id, String beer_name, int brewery_id) throws NotAllowedException {
        beerDao.createBeer(beer_id, beer_name, brewery_id);
    }


    //Update a beer
    //@PreAuthorize("hasRole('ROLE_BREWER')")
    @RequestMapping(path = "/beer", method = RequestMethod.PUT)
    public void updateBeer(@RequestBody Beer aSingleBeer) throws NotAllowedException {
        beerDao.updateBeer(aSingleBeer);
    }

    //Delete a beer
    //Only brewers can do this
    //@PreAuthorize("hasRole('ROLE_BREWER')")
    @RequestMapping(path = "/beer", method = RequestMethod.DELETE)
    public void deleteBeer(@PathVariable int beer_id) throws NotAllowedException {
        beerDao.deleteBeer(beer_id);
    }

    //Get Beer by user id
    @RequestMapping(path = "/users/{userId}/beer", method = RequestMethod.GET)
    public List<Beer> getBeerByUserId(@PathVariable int user_id) throws NotFoundException {
        return beerDao.getBeerByUserId(user_id);
    }

    @RequestMapping(path = "/beer/{brewery_Id}", method = RequestMethod.GET)
    public List<Beer> getAllBeersByBreweryId(@PathVariable int brewery_id) throws NotFoundException {
        return beerDao.getAllBeersByBreweryId(brewery_id);
    }
}
