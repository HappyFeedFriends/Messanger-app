--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

-- Started on 2020-09-11 14:05:49

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
-- TOC entry 6 (class 2615 OID 16394)
-- Name: main; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA main;


ALTER SCHEMA main OWNER TO postgres;

--
-- TOC entry 2851 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA main; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA main IS 'standard main schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16395)
-- Name: message_channel; Type: TABLE; Schema: main; Owner: postgres
--

CREATE TABLE main.message_channel (
    id bigint NOT NULL,
    author_id bigint NOT NULL
);


ALTER TABLE main.message_channel OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16398)
-- Name: message_channel_id_seq; Type: SEQUENCE; Schema: main; Owner: postgres
--

CREATE SEQUENCE main.message_channel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main.message_channel_id_seq OWNER TO postgres;

--
-- TOC entry 2852 (class 0 OID 0)
-- Dependencies: 204
-- Name: message_channel_id_seq; Type: SEQUENCE OWNED BY; Schema: main; Owner: postgres
--

ALTER SEQUENCE main.message_channel_id_seq OWNED BY main.message_channel.id;


--
-- TOC entry 205 (class 1259 OID 16400)
-- Name: messages; Type: TABLE; Schema: main; Owner: postgres
--

CREATE TABLE main.messages (
    message_channel_id bigint NOT NULL,
    id bigint NOT NULL,
    content text NOT NULL,
    author_id bigint NOT NULL,
    date_created date NOT NULL,
    date_update date NOT NULL
);


ALTER TABLE main.messages OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16406)
-- Name: user; Type: TABLE; Schema: main; Owner: postgres
--

CREATE TABLE main."user" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    email text NOT NULL,
    avatar_url text DEFAULT 'default.png'::text NOT NULL,
    login text NOT NULL,
    datebirth date NOT NULL,
    gender smallint NOT NULL,
    date_created date DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE main."user" OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16413)
-- Name: user_id_seq; Type: SEQUENCE; Schema: main; Owner: postgres
--

CREATE SEQUENCE main.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main.user_id_seq OWNER TO postgres;

--
-- TOC entry 2853 (class 0 OID 0)
-- Dependencies: 207
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: main; Owner: postgres
--

ALTER SEQUENCE main.user_id_seq OWNED BY main."user".id;


--
-- TOC entry 2700 (class 2604 OID 16415)
-- Name: message_channel id; Type: DEFAULT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.message_channel ALTER COLUMN id SET DEFAULT nextval('main.message_channel_id_seq'::regclass);


--
-- TOC entry 2702 (class 2604 OID 16416)
-- Name: user id; Type: DEFAULT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main."user" ALTER COLUMN id SET DEFAULT nextval('main.user_id_seq'::regclass);

--
-- TOC entry 2854 (class 0 OID 0)
-- Dependencies: 204
-- Name: message_channel_id_seq; Type: SEQUENCE SET; Schema: main; Owner: postgres
--

SELECT pg_catalog.setval('main.message_channel_id_seq', 1, false);


--
-- TOC entry 2855 (class 0 OID 0)
-- Dependencies: 207
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: main; Owner: postgres
--

SELECT pg_catalog.setval('main.user_id_seq', 77, true);


--
-- TOC entry 2706 (class 2606 OID 16418)
-- Name: message_channel message_channel_pkey; Type: CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.message_channel
    ADD CONSTRAINT message_channel_pkey PRIMARY KEY (id);


--
-- TOC entry 2709 (class 2606 OID 16420)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 2711 (class 2606 OID 16422)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2704 (class 1259 OID 16423)
-- Name: fki_author_id; Type: INDEX; Schema: main; Owner: postgres
--

CREATE INDEX fki_author_id ON main.message_channel USING btree (author_id);


--
-- TOC entry 2707 (class 1259 OID 16424)
-- Name: fki_message_channel_id; Type: INDEX; Schema: main; Owner: postgres
--

CREATE INDEX fki_message_channel_id ON main.messages USING btree (message_channel_id);


--
-- TOC entry 2712 (class 2606 OID 16425)
-- Name: message_channel author_id; Type: FK CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.message_channel
    ADD CONSTRAINT author_id FOREIGN KEY (author_id) REFERENCES main."user"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 2713 (class 2606 OID 16430)
-- Name: messages author_id; Type: FK CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.messages
    ADD CONSTRAINT author_id FOREIGN KEY (author_id) REFERENCES main."user"(id) NOT VALID;


--
-- TOC entry 2714 (class 2606 OID 16435)
-- Name: messages message_channel_id; Type: FK CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.messages
    ADD CONSTRAINT message_channel_id FOREIGN KEY (message_channel_id) REFERENCES main.messages(id) NOT VALID;


-- Completed on 2020-09-11 14:05:50

--
-- PostgreSQL database dump complete
--

