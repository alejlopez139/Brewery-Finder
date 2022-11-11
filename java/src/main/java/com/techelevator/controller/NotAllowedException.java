package com.techelevator.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


//Happens when user has the wrong role and displays 401
@ResponseStatus(code=HttpStatus.UNAUTHORIZED)
public class NotAllowedException extends Exception {


}