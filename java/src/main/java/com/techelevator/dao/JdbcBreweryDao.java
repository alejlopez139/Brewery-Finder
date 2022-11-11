package com.techelevator.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import com.techelevator.model.Brewery;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBreweryDao implements breweryDao {

	private JdbcTemplate jdbcTemplate;

	public JdbcBreweryDao() {
	}

	public JdbcBreweryDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	//Returns a List of Breweries in App
	@Override
	public List<Brewery> getAllBreweries() {
		List<Brewery> allBreweries = new ArrayList<>();
		String sqlGetAllBreweries = "SELECT * FROM breweries";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBreweries);

		while (results.next()) {
			Brewery aBrewery = mapRowToBrewery(results);
			allBreweries.add(aBrewery);
		}
		return allBreweries;
	}

	//Get Brewery by ID
	@Override
	public Brewery getBreweryById(Long breweryId) {
		Brewery aBrewery = new Brewery();
		String sqlGetABrewery = "SELECT * FROM breweries WHERE brewery_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABrewery, breweryId);

		while (results.next()) {
			aBrewery = mapRowToBrewery(results);
		}

		return aBrewery;
	}

	//Create a Brewery
	@Override
	public void addNewBrewery(Brewery aBrewery) {
		String sqlAddBrewery = "INSERT INTO breweries (name, address, city,"
				+ "zipcode, phone_number, active_status, user_id, hours, brewery_logo_url)"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sqlAddBrewery, aBrewery.getName(), aBrewery.getAddress(),
				aBrewery.getCity(), aBrewery.getZipcode(), aBrewery.getPhoneNumber(),
				aBrewery.getActiveStatus(), aBrewery.getUserId(), aBrewery.getHours(), aBrewery.getBreweryLogoUrl());
	}

	//Update Brewery
	@Override
	public void updateBrewery(Brewery aBrewery) {
		String sqlUpdateBrewery = "UPDATE breweries SET name = ?, address = ?,"
				+ " city = ?, zipcode = ?, phone_number = ?, active_status = ?, "
				+ "user_id = ?, hours = ?, brewery_logo_url = ?" + "WHERE brewery_id = ?";
		jdbcTemplate.update(sqlUpdateBrewery, aBrewery.getName(), aBrewery.getAddress(),
				aBrewery.getCity(), aBrewery.getZipcode(), aBrewery.getPhoneNumber(),
				aBrewery.getActiveStatus(), aBrewery.getUserId(),
				aBrewery.getHours(), aBrewery.getBreweryLogoUrl(), aBrewery.getBreweryId());
	}

	//Delete Brewery
	@Override
	public void deleteBrewery(Long breweryId) {
		String sqlDeleteBrewery = "DELETE FROM breweries WHERE brewery_id = ?";
		jdbcTemplate.update(sqlDeleteBrewery, breweryId);
	}

	//Get Brewery By UserId
	@Override
	public List<Brewery> getBreweryByUserId(Long userId) {
		List<Brewery> allBreweriesByUserId = new ArrayList<>();
		String sqlGetAllBreweriesByUserId = "SELECT * FROM breweries WHERE user_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllBreweriesByUserId, userId);

		while (results.next()) {
			Brewery aBrewery = mapRowToBrewery(results);
			allBreweriesByUserId.add(aBrewery);
		}
		return allBreweriesByUserId;
	}

	//Map row to Brewery
	private Brewery mapRowToBrewery(SqlRowSet row) {
		Brewery newBrewery = new Brewery();
		newBrewery.setBreweryId(row.getInt("brewery_id"));
		newBrewery.setName(row.getString("name"));
		newBrewery.setAddress(row.getString("address"));
		newBrewery.setCity(row.getString("city"));
		newBrewery.setZipcode(row.getString("zipcode"));
		newBrewery.setPhoneNumber(row.getString("phone_number"));
		newBrewery.setActiveStatus(row.getString("active_status"));
		newBrewery.setBreweryLogoUrl(row.getString("brewery_logo_url"));
		newBrewery.setUserId(row.getInt("user_id"));
		return newBrewery;
	}
}
