package com.techelevator.controller;

import com.techelevator.dao.breweryDao;
import com.techelevator.model.Brewery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class breweryController {

    @Autowired
    breweryDao breweryDao;

    public breweryController(breweryDao breweryDao) {
        this.breweryDao = breweryDao;
    }

    //Returns list of all breweries
    @PreAuthorize("permitAll")
    @RequestMapping(path = "/breweries", method = RequestMethod.GET)
    public List<Brewery> getAllBreweries(){
        return breweryDao.getAllBreweries();
    }

    //Returns brewery by ID
    @PreAuthorize("permitAll")
    @RequestMapping(path = "/breweries/{breweryId}", method = RequestMethod.GET)
    public Brewery getBreweryById(@PathVariable Long breweryId) throws NotFoundException {
        return breweryDao.getBreweryById(breweryId);
    }

    //Add a new brewery
    //This needs to limited to just "Admin" users
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/breweries", method = RequestMethod.POST)
    public void addNewBrewery(@RequestBody Brewery aBrewery) throws NotAllowedException {
        breweryDao.addNewBrewery(aBrewery);
    }

    //Update brewery
    //@PreAuthorize("hasRole('ROLE_BREWER')")
    @RequestMapping(path = "/breweries", method = RequestMethod.PUT)
    public void updateBrewery(@RequestBody Brewery aBrewery) throws NotAllowedException {
        breweryDao.updateBrewery(aBrewery);
    }

    //Delete a brewery
    //Only admin can do this
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/breweries/{breweryId}", method = RequestMethod.DELETE)
    public void deleteBrewery(@PathVariable Long breweryId) throws NotAllowedException {
        breweryDao.deleteBrewery(breweryId);
    }

    //Get Brewery by user id
    @RequestMapping(path = "/users/{userId}/breweries", method = RequestMethod.GET)
    public List<Brewery> getBreweryByUserId(@PathVariable Long userId) throws NotFoundException{
        return breweryDao.getBreweryByUserId(userId);
    }

}
