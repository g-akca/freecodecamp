--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

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

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(40) NOT NULL,
    description text,
    age_in_millions_of_years numeric(8,2),
    distance_from_earth integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(40) NOT NULL,
    description text,
    is_spherical boolean,
    distance_from_earth integer,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(40) NOT NULL,
    description text,
    has_life boolean,
    is_spherical boolean,
    star_id integer,
    planet_types_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: planet_types; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet_types (
    planet_types_id integer NOT NULL,
    name character varying(40) NOT NULL,
    description text
);


ALTER TABLE public.planet_types OWNER TO freecodecamp;

--
-- Name: planet_types_planet_type_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_types_planet_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_types_planet_type_id_seq OWNER TO freecodecamp;

--
-- Name: planet_types_planet_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_types_planet_type_id_seq OWNED BY public.planet_types.planet_types_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(40) NOT NULL,
    description text,
    is_spherical boolean,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: planet_types planet_types_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_types ALTER COLUMN planet_types_id SET DEFAULT nextval('public.planet_types_planet_type_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 'The galaxy that contains our Solar System, a barred spiral galaxy.', 13600.00, 0);
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 'The nearest major spiral galaxy to the Milky Way.', 10000.00, 2537000);
INSERT INTO public.galaxy VALUES (3, 'Triangulum', 'A spiral galaxy in the Local Group, smaller than Andromeda.', 12000.00, 3000000);
INSERT INTO public.galaxy VALUES (4, 'Whirlpool', 'A classic spiral galaxy interacting with a smaller companion.', 400.00, 23000000);
INSERT INTO public.galaxy VALUES (5, 'Sombrero', 'A galaxy with a bright nucleus and large central bulge.', 13250.00, 29000000);
INSERT INTO public.galaxy VALUES (6, 'Messier 87', 'A giant elliptical galaxy with a supermassive black hole.', 13000.00, 53000000);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', 'Earth’s only natural satellite.', true, 384400, 1);
INSERT INTO public.moon VALUES (2, 'Phobos', 'The larger and closer moon of Mars.', false, 9378, 2);
INSERT INTO public.moon VALUES (3, 'Deimos', 'The smaller and more distant moon of Mars.', false, 23460, 2);
INSERT INTO public.moon VALUES (4, 'Io', 'A volcanically active moon of Jupiter.', true, 628300, 4);
INSERT INTO public.moon VALUES (5, 'Europa', 'An icy moon believed to have a subsurface ocean.', true, 628300, 4);
INSERT INTO public.moon VALUES (6, 'Ganymede', 'The largest moon in the Solar System.', true, 628300, 4);
INSERT INTO public.moon VALUES (7, 'Callisto', 'A heavily cratered moon of Jupiter.', true, 628300, 4);
INSERT INTO public.moon VALUES (8, 'Titan', 'Saturn’s largest moon with a thick atmosphere.', true, 1200000, 5);
INSERT INTO public.moon VALUES (9, 'Enceladus', 'An icy moon that ejects water plumes.', true, 1200000, 5);
INSERT INTO public.moon VALUES (10, 'Rhea', 'A heavily cratered moon of Saturn.', true, 1200000, 5);
INSERT INTO public.moon VALUES (11, 'Iapetus', 'A moon with a distinctive two-tone coloration.', true, 1200000, 5);
INSERT INTO public.moon VALUES (12, 'Triton', 'Neptune’s largest moon with retrograde orbit.', true, 4300000, 7);
INSERT INTO public.moon VALUES (13, 'Nereid', 'A moon with a highly eccentric orbit.', false, 4300000, 7);
INSERT INTO public.moon VALUES (14, 'Charon', 'The largest moon of Pluto, forming a binary system.', true, 5900000, 10);
INSERT INTO public.moon VALUES (15, 'Styx', 'A small moon of Pluto.', false, 5900000, 10);
INSERT INTO public.moon VALUES (16, 'Nix', 'An irregularly shaped moon of Pluto.', false, 5900000, 10);
INSERT INTO public.moon VALUES (17, 'Hydra', 'A small outer moon of Pluto.', false, 5900000, 10);
INSERT INTO public.moon VALUES (18, 'Kerberos', 'A tiny dark moon of Pluto.', false, 5900000, 10);
INSERT INTO public.moon VALUES (19, 'Aqualon', 'A fictional icy moon orbiting an ocean planet.', true, 25000000, 11);
INSERT INTO public.moon VALUES (20, 'Vortex', 'A large moon orbiting a distant gas giant.', true, 40000000, 12);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Earth', 'A terrestrial planet with abundant life and liquid water.', true, true, 1, 1);
INSERT INTO public.planet VALUES (2, 'Mars', 'A cold terrestrial planet with signs of ancient water.', false, true, 1, 1);
INSERT INTO public.planet VALUES (3, 'Venus', 'A rocky planet with a dense, toxic atmosphere.', false, true, 1, 1);
INSERT INTO public.planet VALUES (4, 'Jupiter', 'The largest gas giant in the Solar System.', false, true, 1, 2);
INSERT INTO public.planet VALUES (5, 'Saturn', 'A gas giant famous for its extensive ring system.', false, true, 1, 2);
INSERT INTO public.planet VALUES (6, 'Uranus', 'An ice giant with a tilted rotational axis.', false, true, 1, 3);
INSERT INTO public.planet VALUES (7, 'Neptune', 'A distant ice giant with extreme winds.', false, true, 1, 3);
INSERT INTO public.planet VALUES (8, 'Proxima b', 'An exoplanet orbiting within the habitable zone of Proxima Centauri.', false, true, 2, 5);
INSERT INTO public.planet VALUES (9, 'Kepler-22b', 'A super-Earth exoplanet that may have liquid water.', false, true, 3, 5);
INSERT INTO public.planet VALUES (10, 'Pluto', 'A dwarf planet located in the Kuiper Belt.', false, true, 1, 4);
INSERT INTO public.planet VALUES (11, 'Oceanus', 'A hypothetical ocean-covered planet.', false, true, 4, 6);
INSERT INTO public.planet VALUES (12, 'Aether', 'A massive gas giant orbiting a distant star.', false, true, 5, 2);


--
-- Data for Name: planet_types; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet_types VALUES (1, 'Terrestrial', 'Rocky planets with solid surfaces, like Earth and Mars.');
INSERT INTO public.planet_types VALUES (2, 'Gas Giant', 'Large planets composed mainly of hydrogen and helium, such as Jupiter.');
INSERT INTO public.planet_types VALUES (3, 'Ice Giant', 'Planets rich in water, ammonia, and methane ices.');
INSERT INTO public.planet_types VALUES (4, 'Dwarf Planet', 'Small planetary bodies that orbit a star but have not cleared their orbit.');
INSERT INTO public.planet_types VALUES (5, 'Super-Earth', 'Rocky planets larger than Earth but smaller than ice giants.');
INSERT INTO public.planet_types VALUES (6, 'Ocean Planet', 'Planets covered mostly or entirely by deep global oceans.');


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Sun', 'The star at the center of the Solar System.', true, 1);
INSERT INTO public.star VALUES (2, 'Proxima Centauri', 'A small red dwarf and the closest known star to the Sun.', true, 1);
INSERT INTO public.star VALUES (3, 'Sirius', 'The brightest star in the night sky, part of a binary system.', true, 1);
INSERT INTO public.star VALUES (4, 'Betelgeuse', 'A red supergiant star nearing the end of its life cycle.', true, 1);
INSERT INTO public.star VALUES (5, 'Rigel', 'A massive blue supergiant star in the Orion constellation.', true, 1);
INSERT INTO public.star VALUES (6, 'Vega', 'A bright star often used as a reference point in astronomy.', true, 2);


--
-- Name: galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: planet_types_planet_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_types_planet_type_id_seq', 6, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: galaxy galaxy_name_unique; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_unique UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_unique; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_unique UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_unique; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_unique UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet_types planet_type_name_unique; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_types
    ADD CONSTRAINT planet_type_name_unique UNIQUE (name);


--
-- Name: planet_types planet_types_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_types
    ADD CONSTRAINT planet_types_pkey PRIMARY KEY (planet_types_id);


--
-- Name: star star_name_unique; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_unique UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_planet_types_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_planet_types_id_fkey FOREIGN KEY (planet_types_id) REFERENCES public.planet_types(planet_types_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

