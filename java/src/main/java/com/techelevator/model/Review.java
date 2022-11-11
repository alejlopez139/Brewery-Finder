package com.techelevator.model;

public class Review {
    private int User_ID;
    private int Beer_ID;
    private String Username;
    private String Beer_Name;

    public int getUser_ID() {
        return User_ID;
    }

    public void setUser_ID(int user_ID) {
        User_ID = user_ID;
    }

    public int getBeer_ID() {
        return Beer_ID;
    }

    public void setBeer_ID(int beer_ID) {
        Beer_ID = beer_ID;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getBeer_Name() {
        return Beer_Name;
    }

    public void setBeer_Name(String beer_Name) {
        Beer_Name = beer_Name;
    }
}
