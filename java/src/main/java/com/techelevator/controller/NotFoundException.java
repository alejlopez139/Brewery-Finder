package com.techelevator.controller;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


//When content is not found
@ResponseStatus(code=HttpStatus.NOT_FOUND)
public class NotFoundException extends Exception {

}