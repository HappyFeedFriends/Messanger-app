--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

-- Started on 2020-10-09 11:29:51

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
-- TOC entry 6 (class 2615 OID 24618)
-- Name: main; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA main;


ALTER SCHEMA main OWNER TO postgres;

--
-- TOC entry 2858 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA main; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA main IS 'standard main schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 24619)
-- Name: message_channel; Type: TABLE; Schema: main; Owner: postgres
--

CREATE TABLE main.message_channel (
    id bigint NOT NULL,
    author_id bigint NOT NULL,
    companion_id bigint
);


ALTER TABLE main.message_channel OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 24622)
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
-- TOC entry 2859 (class 0 OID 0)
-- Dependencies: 204
-- Name: message_channel_id_seq; Type: SEQUENCE OWNED BY; Schema: main; Owner: postgres
--

ALTER SEQUENCE main.message_channel_id_seq OWNED BY main.message_channel.id;


--
-- TOC entry 208 (class 1259 OID 32874)
-- Name: messages_id_seq; Type: SEQUENCE; Schema: main; Owner: postgres
--

CREATE SEQUENCE main.messages_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main.messages_id_seq OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 24624)
-- Name: messages; Type: TABLE; Schema: main; Owner: postgres
--

CREATE TABLE main.messages (
    message_channel_id bigint NOT NULL,
    id bigint DEFAULT nextval('main.messages_id_seq'::regclass) NOT NULL,
    content text NOT NULL,
    author_id bigint NOT NULL,
    date_created date DEFAULT now() NOT NULL,
    date_update date DEFAULT now() NOT NULL
);


ALTER TABLE main.messages OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 24630)
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
    date_created date DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "IsOnline" boolean DEFAULT false NOT NULL
);


ALTER TABLE main."user" OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 24638)
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
-- TOC entry 2860 (class 0 OID 0)
-- Dependencies: 207
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: main; Owner: postgres
--

ALTER SEQUENCE main.user_id_seq OWNED BY main."user".id;


--
-- TOC entry 2702 (class 2604 OID 24640)
-- Name: message_channel id; Type: DEFAULT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.message_channel ALTER COLUMN id SET DEFAULT nextval('main.message_channel_id_seq'::regclass);


--
-- TOC entry 2708 (class 2604 OID 24641)
-- Name: user id; Type: DEFAULT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main."user" ALTER COLUMN id SET DEFAULT nextval('main.user_id_seq'::regclass);

--
-- TOC entry 2861 (class 0 OID 0)
-- Dependencies: 204
-- Name: message_channel_id_seq; Type: SEQUENCE SET; Schema: main; Owner: postgres
--

SELECT pg_catalog.setval('main.message_channel_id_seq', 10, true);


--
-- TOC entry 2862 (class 0 OID 0)
-- Dependencies: 208
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: main; Owner: postgres
--

SELECT pg_catalog.setval('main.messages_id_seq', 154, true);


--
-- TOC entry 2863 (class 0 OID 0)
-- Dependencies: 207
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: main; Owner: postgres
--

SELECT pg_catalog.setval('main.user_id_seq', 119, true);


--
-- TOC entry 2712 (class 2606 OID 24643)
-- Name: message_channel message_channel_pkey; Type: CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.message_channel
    ADD CONSTRAINT message_channel_pkey PRIMARY KEY (id);


--
-- TOC entry 2715 (class 2606 OID 24645)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 2717 (class 2606 OID 24647)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2710 (class 1259 OID 24648)
-- Name: fki_author_id; Type: INDEX; Schema: main; Owner: postgres
--

CREATE INDEX fki_author_id ON main.message_channel USING btree (author_id);


--
-- TOC entry 2713 (class 1259 OID 24649)
-- Name: fki_message_channel_id; Type: INDEX; Schema: main; Owner: postgres
--

CREATE INDEX fki_message_channel_id ON main.messages USING btree (message_channel_id);


--
-- TOC entry 2718 (class 2606 OID 24650)
-- Name: message_channel author_id; Type: FK CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.message_channel
    ADD CONSTRAINT author_id FOREIGN KEY (author_id) REFERENCES main."user"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 2719 (class 2606 OID 24655)
-- Name: messages author_id; Type: FK CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.messages
    ADD CONSTRAINT author_id FOREIGN KEY (author_id) REFERENCES main."user"(id) NOT VALID;


--
-- TOC entry 2720 (class 2606 OID 24660)
-- Name: messages message_channel_id; Type: FK CONSTRAINT; Schema: main; Owner: postgres
--

ALTER TABLE ONLY main.messages
    ADD CONSTRAINT message_channel_id FOREIGN KEY (message_channel_id) REFERENCES main.messages(id) NOT VALID;


-- Completed on 2020-10-09 11:29:51

--
-- PostgreSQL database dump complete
--

