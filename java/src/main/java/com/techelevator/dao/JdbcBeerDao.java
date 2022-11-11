package com.techelevator.dao;


import com.techelevator.model.Beer;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@Component
public class JdbcBeerDao implements BeerDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private BasicDataSource dataSource; //This helps us make a connection with the database

/*
These five lines that follow is to connect to the DB
 */
    public void run() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setUrl("jdbc:postgresql://localhost:5432/Brewery");
        dataSource.setUsername("postgres");
        dataSource.setPassword("postgres1");

        jdbcTemplate = new JdbcTemplate(dataSource);
    }
    public JdbcBeerDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Beer> getAllBeers() {
        List<Beer> allBeers = new ArrayList<>();
        String sqlGetAllBeers = "SELECT * FROM Beers";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBeers);

        while(results.next()) {
            Beer aSingleBeer = mapRowToBeer(results);
            allBeers.add(aSingleBeer);
        }
        return allBeers;
    }

    @Override
    public boolean createBeer(int beer_id, String beer_name, int brewery_id) {
        boolean beerCreated = false;

        // creates a new beer
        String insertBeer = "insert into Beer(beer_id, beer_name, breweryId) values(?,?,?)";

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder(); //generates an ID for each Beer that is added
        String id_column = "beer_id";
        beerCreated = jdbcTemplate.update(con -> {
                    PreparedStatement ps = con.prepareStatement(insertBeer, new String[]{id_column});
                    ps.setInt(1, beer_id);
                    ps.setString(2, beer_name);
                    ps.setInt(3, brewery_id);
                    return ps;
                }
                , keyHolder) == 1;
        /*
        This line generates and assigns the newly generated to the new beer ID
         */
        int newBeerID = (int) keyHolder.getKeys().get(id_column);

        return beerCreated;
    }

    @Override
//    Get a Beer by specific ID
    public Beer getBeerById(int beer_id) {
        Beer aSingleBeer = new Beer();
        String sqlGetABrewery = "SELECT * FROM Beer WHERE beer_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABrewery, beer_id);

        while(results.next()) {
            aSingleBeer = mapRowToBeer(results);
        }

        return aSingleBeer;
    }

    @Override
    public void updateBeer(Beer aSingleBeer) {
        String sqlUpdateBeer = "UPDATE Beer SET beer_name = ?, Description = ?, Type = ?, ABV = ?, IMG_URL = ? WHERE Beer_ID = ?";
        jdbcTemplate.update(sqlUpdateBeer, aSingleBeer.getBeer_Name(), aSingleBeer.getDescription(),
                aSingleBeer.getType(), aSingleBeer.getABV(), aSingleBeer.getImg_URL(), aSingleBeer.getBeer_ID());

    }

    @Override
    public void deleteBeer(int beer_id) {

        // deletes a beer
        String sqlDeleteBeer = "delete From Beer WHERE beer_id= ?";
        jdbcTemplate.update(sqlDeleteBeer, beer_id);;

    }

    @Override
    public List<Beer> getBeerByUserId(int user_id) {
        List<Beer> allBeerByUserId = new ArrayList<>();
        String sqlGetAllBeersByUserId = "SELECT * FROM Beers WHERE user_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBeersByUserId, user_id);

        while(results.next()) {
            Beer aSingleBeer = mapRowToBeer(results);
            allBeerByUserId.add(aSingleBeer);
        }
        return allBeerByUserId;

    }
    // We will need to figure out what to return
    @Override 
    public List<Beer> getAllBeersByBreweryId(int brewery_id) {
        List<Beer> getAllBeersByBreweryId = new ArrayList<>();
        String sqlGetAllBeersByBreweryId = "SELECT * FROM beer INNER JOIN ON breweries.brewery_id = beer.brewery_id";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBeersByBreweryId, brewery_id);
        return getAllBeersByBreweryId;

    }

    //Map Row to Beer
    private Beer mapRowToBeer(SqlRowSet row) {
        Beer newBeer = new Beer();
        newBeer.setBeer_ID(row.getInt("beer_id"));
        newBeer.setBeer_Name(row.getString("beer_name"));
        newBeer.setDescription(row.getString("description"));
        newBeer.setType(row.getString("type"));
        newBeer.setABV(row.getInt("ABV"));
        newBeer.setImg_URL("URL");
        return newBeer;
    }

}