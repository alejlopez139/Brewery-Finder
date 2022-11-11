BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP TABLE IF EXISTS breweries;
DROP SEQUENCE IF EXISTS seq_brewery_id;
DROP TABLE IF EXISTS beers;
DROP SEQUENCE IF EXISTS seq_beer_id;
DROP TABLE IF EXISTS reviews;
DROP SEQUENCE IF EXISTS seq_review_id;

CREATE SEQUENCE seq_user_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_brewery_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_beer_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_review_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;


CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE breweries (
    brewery_id int DEFAULT nextval('seq_brewery_id'::regclass) NOT NULL,
    name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    city varchar(50) NOT NULL,
    zipcode varchar(15) NOT NULL,
    phone_number varchar(15),
    activity_status text NOT NULL,
    business_hours varchar(255),
    user_id int NOT NULL,
	brewery_logo_url varchar(255),
  CONSTRAINT pk_brewery_brewery_id PRIMARY KEY (brewery_id),
  CONSTRAINT fk_user_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE beers (
    beer_id int DEFAULT nextval('seq_beer_id'::regclass) NOT NULL,
    beer_name varchar(255) NOT NULL,
    description varchar(255),
    beer_type varchar(255) NOT NULL,
    img_url varchar(255),
    alcohol_by_volume varchar(50) NOT NULL,
    brewery_id int NOT NULL,
    CONSTRAINT pk_beer_beer_id PRIMARY KEY (beer_id),
    CONSTRAINT fk_brewery_brewery_id FOREIGN KEY (brewery_id) REFERENCES breweries(brewery_id)
);

CREATE TABLE reviews (
    review_id int DEFAULT nextval('seq_review_id'::regclass) NOT NULL,
    user_id int NOT NULL,
    beer_id int NOT NULL,
    username varchar(255) NOT NULL,
    review_content varchar(500) NOT NULL,
    CONSTRAINT pk_review_review_id PRIMARY KEY (review_id),
    CONSTRAINT fk_user_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT fk_beer_beer_id FOREIGN KEY (beer_id) REFERENCES beers(beer_id)
);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');

COMMIT TRANSACTION;