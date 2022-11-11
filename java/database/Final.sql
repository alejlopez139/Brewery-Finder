--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12
-- Dumped by pg_dump version 12.12

-- Started on 2022-09-20 22:28:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 203 (class 1259 OID 16532)
-- Name: seq_brewery_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_brewery_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_brewery_id OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 205 (class 1259 OID 16540)
-- Name: breweries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.breweries (
    brewery_id integer DEFAULT nextval('public.seq_brewery_id'::regclass) NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    city character varying(50) NOT NULL,
    zipcode character varying(15) NOT NULL,
    phone_number character varying(15),
    activity_status text NOT NULL,
    business_hours character varying(255),
    user_id integer,
    brewery_logo_url character varying(255)
);


ALTER TABLE public.breweries OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16530)
-- Name: seq_user_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_user_id OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16534)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer DEFAULT nextval('public.seq_user_id'::regclass) NOT NULL,
    username character varying(50) NOT NULL,
    password_hash character varying(200) NOT NULL,
    role character varying(50) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;


CREATE TABLE public.beer (
    beer_id integer DEFAULT nextval('public.seq_beer_id'::regclass) NOT NULL,
    beer_name character varying(50) NOT NULL,
    ABV integer,
    IMG_URL character varying(50) NOT NULL,
    beer_type character varying(50) NOT NULL
);


ALTER TABLE public.beer OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 26651)
-- Name: beers; Type: TABLE; Schema: public; Owner: postgres
--

--
-- TOC entry 214 (class 1259 OID 26656)
-- Name: review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.review (
    user_id integer DEFAULT nextval('public.seq_user_id'::regclass) NOT NULL,
    username character varying(50) NOT NULL,
    beer_id integer,
    beer_name character varying(50) NOT NULL
);


ALTER TABLE public.review OWNER TO postgres;

--
-- TOC entry 2830 (class 0 OID 16540)
-- Dependencies: 205
-- Data for Name: breweries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.breweries (brewery_id, name, address, city, zipcode, phone_number, activity_status, business_hours, user_id, brewery_logo_url) FROM stdin;
\.


--
-- TOC entry 2829 (class 0 OID 16534)
-- Dependencies: 204
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, username, password_hash, role) FROM stdin;
1	user	$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC	ROLE_USER
2	admin	$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC	ROLE_ADMIN
\.


--
-- TOC entry 2836 (class 0 OID 0)
-- Dependencies: 203
-- Name: seq_brewery_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_brewery_id', 1, false);


--
-- TOC entry 2837 (class 0 OID 0)
-- Dependencies: 202
-- Name: seq_user_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_user_id', 2, true);


--
-- TOC entry 2699 (class 2606 OID 16548)
-- Name: breweries pk_brewery_brewery_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.breweries
    ADD CONSTRAINT pk_brewery_brewery_id PRIMARY KEY (brewery_id);


--
-- TOC entry 2697 (class 2606 OID 16539)
-- Name: users pk_user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_user PRIMARY KEY (user_id);


--
-- TOC entry 2700 (class 2606 OID 16549)
-- Name: breweries fk_user_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beer
ADD CONSTRAINT pk_beer PRIMARY KEY (beer_id);

--
-- TOC entry 3196 (class 2606 OID 26655)
-- Name: beers Beers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

--
-- TOC entry 3198 (class 2606 OID 26660)
-- Name: review Review_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review
ADD CONSTRAINT pk_Review PRIMARY KEY (user_id);

ALTER TABLE ONLY public.breweries
ADD CONSTRAINT fk_user_user_id FOREIGN KEY (user_id) REFERENCES public.users(user_id);

ALTER TABLE ONLY public.beer
ADD CONSTRAINT fk_brewery_brewery_id FOREIGN KEY (brewery_id) REFERENCES public.breweries(brewery_id);

ALTER TABLE ONLY public.reviews
ADD CONSTRAINT fk_user_user_id FOREIGN KEY (user_id) REFERENCES public.users(user_id);

ALTER TABLE ONLY public.reviews
ADD CONSTRAINT fk_beer_beer_id FOREIGN KEY (beer_id) REFERENCES public.beer(beer_id);


-- Completed on 2022-09-20 22:28:51

--
-- PostgreSQL database dump complete
--

