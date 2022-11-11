package com.techelevator.model;

public class Beer {
    private int Beer_ID;
    private String Beer_Name;
    private String Description;
    private String beerType;
    private String Img_URL;
    private int alcoholByVolume;

    public Beer(int beer_ID, String beer_Name, String description, String type, String img_URL, int  ABV ) {
        Beer_ID = beer_ID;
        Beer_Name = beer_Name;
        Description = description;
        beerType = type;
        Img_URL = img_URL;
        alcoholByVolume = ABV;
    }

    public Beer() {

    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }


    public String getType() {
        return beerType;
    }

    public void setType(String type) {
        this.beerType = type;
    }

    public String getImg_URL() {
        return Img_URL;
    }

    public void setImg_URL(String img_URL) {
        Img_URL = img_URL;
    }

    public int getABV() {
        return alcoholByVolume;
    }

    public void setABV(int ABV) {
        this.alcoholByVolume = ABV;
    }

    public Beer(int beer_ID, String beer_Name) {
        Beer_ID = beer_ID;
        Beer_Name = beer_Name;
    }

    public int getBeer_ID() {
        return Beer_ID;
    }

    public void setBeer_ID(int beer_ID) {
        Beer_ID = beer_ID;
    }

    public String getBeer_Name() {
        return Beer_Name;
    }

    public void setBeer_Name(String beer_Name) {
        Beer_Name = beer_Name;
    }
}
