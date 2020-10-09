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
-- TOC entry 2847 (class 0 OID 24619)
-- Dependencies: 203
-- Data for Name: message_channel; Type: TABLE DATA; Schema: main; Owner: postgres
--

COPY main.message_channel (id, author_id, companion_id) FROM stdin;
4	93	93
5	93	93
6	93	93
7	93	93
8	93	93
9	93	93
10	93	93
\.


--
-- TOC entry 2849 (class 0 OID 24624)
-- Dependencies: 205
-- Data for Name: messages; Type: TABLE DATA; Schema: main; Owner: postgres
--

COPY main.messages (message_channel_id, id, content, author_id, date_created, date_update) FROM stdin;
1	1	dsadadad	93	2020-09-27	2020-09-27
1	2	dasdadsadas	93	2020-09-27	2020-09-27
1	3	dasdsadd	94	2020-09-27	2020-09-27
1	4	Проверяем чат на работоспобость 1,2,3,4,5,6,78,3213das тут пару букаф и тут пару букаф	94	2020-09-27	2020-09-27
1	5	Теперь надо подключать грёбаные сокеты xD	94	2020-09-27	2020-09-27
1	6	dsad	96	2020-09-27	2020-09-27
1	7	123131	96	2020-09-27	2020-09-27
1	8	dsada	96	2020-09-27	2020-09-27
1	9	dsada	96	2020-09-27	2020-09-27
3	10	dsada	96	2020-09-27	2020-09-27
3	11	dsada	96	2020-09-27	2020-09-27
3	12	dsada	96	2020-09-27	2020-09-27
3	13	dsada	96	2020-09-27	2020-09-27
3	14	dsada	96	2020-09-27	2020-09-27
3	15	dsada	96	2020-09-27	2020-09-27
3	16	dsada	96	2020-09-27	2020-09-27
3	17	dsada	96	2020-09-27	2020-09-27
3	18	dasdsad	96	2020-09-27	2020-09-27
3	19	dasdsad	96	2020-09-27	2020-09-27
3	20	dasdsad	96	2020-09-27	2020-09-27
3	21	dasdsad	96	2020-09-27	2020-09-27
3	22	dasd	96	2020-09-27	2020-09-27
3	23	dasd	96	2020-09-27	2020-09-27
3	24	1234	96	2020-09-27	2020-09-27
3	25	111	96	2020-09-27	2020-09-27
3	26	1112	96	2020-09-27	2020-09-27
3	27	dsa	96	2020-09-27	2020-09-27
3	28	eqwe	96	2020-09-27	2020-09-27
3	29	123	96	2020-09-27	2020-09-27
3	30	dsa12314	96	2020-09-27	2020-09-27
3	31	dsa12314sa	96	2020-09-27	2020-09-27
3	32	dsa	96	2020-09-27	2020-09-27
3	33	123	96	2020-09-27	2020-09-27
3	34	dsa	96	2020-09-27	2020-09-27
3	35	dsad	96	2020-09-27	2020-09-27
3	36	dsadsd	96	2020-09-27	2020-09-27
3	37	dsa	96	2020-09-27	2020-09-27
3	38	dsaaa	96	2020-09-27	2020-09-27
3	39	dsad	96	2020-09-27	2020-09-27
3	40	dsa	96	2020-09-27	2020-09-27
3	41	dsa	96	2020-09-27	2020-09-27
3	42	dsa	96	2020-09-27	2020-09-27
3	43	dsaaa	96	2020-09-27	2020-09-27
3	44	dsaaadsd	96	2020-09-27	2020-09-27
3	45	кек в вроде работает?!"	96	2020-09-27	2020-09-27
3	46	кек в вроде работает?!"	96	2020-09-27	2020-09-27
3	47	кек в вроде работает?!"	96	2020-09-27	2020-09-27
4	48	кек в вроде работает?!"	96	2020-09-27	2020-09-27
4	49	кек в вроде работает?!"	96	2020-09-27	2020-09-27
4	50	123	96	2020-09-27	2020-09-27
4	51	12332	96	2020-09-27	2020-09-27
4	52	12332	96	2020-09-27	2020-09-27
3	53	123	96	2020-09-27	2020-09-27
3	54	123	96	2020-09-27	2020-09-27
3	55	123dasd	96	2020-09-27	2020-09-27
3	56	123dasddasd	96	2020-09-27	2020-09-27
3	57	dsad	96	2020-09-27	2020-09-27
3	58	dsad	96	2020-09-27	2020-09-27
3	59	dsad	96	2020-09-27	2020-09-27
3	60	dsad123	96	2020-09-27	2020-09-27
3	61	dsad123qq	96	2020-09-27	2020-09-27
4	62	eqw	96	2020-09-27	2020-09-27
2	63	dsad	94	2020-09-27	2020-09-27
2	64	dsad	94	2020-09-27	2020-09-27
2	65	dsadqwe	94	2020-09-27	2020-09-27
4	66	dsad	94	2020-09-27	2020-09-27
4	67	dsada	94	2020-09-27	2020-09-27
4	68	dsadad	96	2020-09-27	2020-09-27
5	69	123131451	96	2020-09-27	2020-09-27
3	70	dsadasd123adda	96	2020-09-27	2020-09-27
3	71	dsadasd123adda	96	2020-09-27	2020-09-27
4	72	dsadasd123adda	96	2020-09-27	2020-09-27
4	73	dsadasd123adda	96	2020-09-27	2020-09-27
3	74	dsadasd123adda	96	2020-09-27	2020-09-27
3	75	dsadasd123adda	96	2020-09-27	2020-09-27
3	76	dsad	96	2020-09-27	2020-09-27
3	77	dsadd	96	2020-09-27	2020-09-27
3	78	dsad	96	2020-09-27	2020-09-27
3	79	dsaddd	96	2020-09-27	2020-09-27
3	80	выфвфвв	96	2020-09-27	2020-09-27
3	81	выфвфвввыфвфвфвф	96	2020-09-27	2020-09-27
3	82	выфвфв	96	2020-09-27	2020-09-27
3	83	выфвфв	96	2020-09-27	2020-09-27
3	84	выфвфв	96	2020-09-27	2020-09-27
3	85	выфвфв	96	2020-09-27	2020-09-27
3	86	выфвфввыф	96	2020-09-27	2020-09-27
4	87	d	96	2020-09-27	2020-09-27
4	88	dsad	96	2020-09-27	2020-09-27
4	89	dsadada	96	2020-09-27	2020-09-27
4	90	dsadada	96	2020-09-27	2020-09-27
4	91	dsadada	96	2020-09-27	2020-09-27
4	92	dsadada1231	96	2020-09-27	2020-09-27
4	93	dsadada1231	96	2020-09-27	2020-09-27
4	94	dsadada1231	96	2020-09-27	2020-09-27
4	95	dsadada1231	96	2020-09-27	2020-09-27
4	96	dsadada1231	96	2020-09-27	2020-09-27
4	97	dsadada1231	96	2020-09-27	2020-09-27
4	98	dsadada1231	96	2020-09-27	2020-09-27
4	99	dsadada1231	96	2020-09-27	2020-09-27
4	100	dsadada1231	96	2020-09-27	2020-09-27
4	101	dsadada1231	96	2020-09-27	2020-09-27
4	102	dsadada1231	96	2020-09-27	2020-09-27
4	103	dsadada1231	96	2020-09-27	2020-09-27
4	104	dsadada1231	96	2020-09-27	2020-09-27
4	105	dsadada1231	96	2020-09-27	2020-09-27
4	106	dsadada1231	96	2020-09-27	2020-09-27
4	107	dsadada1231	96	2020-09-27	2020-09-27
4	108	dsadada1231	96	2020-09-27	2020-09-27
4	109	dsadada1231	96	2020-09-27	2020-09-27
4	110	dsadada1231	96	2020-09-27	2020-09-27
4	111	dsadada1231dsada	96	2020-09-27	2020-09-27
4	112	dsadada1231dsada	96	2020-09-27	2020-09-27
4	113	dsadada1231dsadafdfsd	96	2020-09-27	2020-09-27
4	114	dsadada1231dsadafdfsdfdsfds	96	2020-09-27	2020-09-27
4	115	dsadada1231dsadafdfsdfdsfds	96	2020-09-27	2020-09-27
4	116	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdf	96	2020-09-27	2020-09-27
4	117	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdffdsfsdfs	96	2020-09-27	2020-09-27
4	118	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdffdsfsdfs	96	2020-09-27	2020-09-27
4	119	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdffdsfsdfs	96	2020-09-27	2020-09-27
4	120	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdffdsfsdfs	96	2020-09-27	2020-09-27
4	121	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdffdsfsdfs	96	2020-09-27	2020-09-27
4	122	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdffdsfsdfs	96	2020-09-27	2020-09-27
4	123	dsadada1231dsadafdfsdfdsfdsfsdfsffsdfsdfsdffdsfsdfsfsdfsfsf	96	2020-09-27	2020-09-27
4	124	dsadasdada	94	2020-09-27	2020-09-27
4	125	312313	96	2020-09-27	2020-09-27
4	126	312313	96	2020-09-27	2020-09-27
4	127	3123	96	2020-09-27	2020-09-27
4	128	3123	96	2020-09-27	2020-09-27
4	129	dsada	94	2020-09-27	2020-09-27
4	130	dsad	94	2020-09-27	2020-09-27
4	131	dsadqwe	94	2020-09-27	2020-09-27
4	132	dsa	96	2020-09-27	2020-09-27
4	133	dsads123	96	2020-09-27	2020-09-27
4	134	dsadd123	94	2020-09-27	2020-09-27
4	135	Как твои дела?	94	2020-09-27	2020-09-27
4	136	Нормально, а у тебя как?	96	2020-09-27	2020-09-27
4	137	Кек в	96	2020-09-27	2020-09-27
3	138	dsadsadsad	96	2020-09-27	2020-09-27
4	139	dsadasd	94	2020-09-27	2020-09-27
4	140	dsad	96	2020-09-27	2020-09-27
4	141	dsadasdad	96	2020-09-27	2020-09-27
4	142	Начнём чатится?	96	2020-09-27	2020-09-27
4	143	привет	94	2020-10-08	2020-10-08
3	144	выфв	93	2020-10-08	2020-10-08
3	145	выфвфвв	93	2020-10-08	2020-10-08
1	146	dasdasd	93	2020-10-08	2020-10-08
2	147	dsadaqwe1231	93	2020-10-08	2020-10-08
3	148	dsaryytyt	93	2020-10-08	2020-10-08
1	149	hello world	93	2020-10-08	2020-10-08
2	150	dsada	93	2020-10-08	2020-10-08
2	151	dddd	94	2020-10-08	2020-10-08
2	152	Привет, что делаешь?	94	2020-10-08	2020-10-08
7	153	dsadasd	93	2020-10-09	2020-10-09
7	154	dasdasd	93	2020-10-09	2020-10-09
\.


--
-- TOC entry 2850 (class 0 OID 24630)
-- Dependencies: 206
-- Data for Name: user; Type: TABLE DATA; Schema: main; Owner: postgres
--

COPY main."user" (id, username, password, email, avatar_url, login, datebirth, gender, date_created, "IsOnline") FROM stdin;
100	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
101	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
102	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
103	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
104	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
105	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
106	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
107	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
108	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
109	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
110	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
111	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
112	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
113	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic/27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
93	admin	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	ruslan7761@live.ru	/img/user_avatars/default.png	admin	2020-09-11	0	2020-09-12	f
94	admin1	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	ruslan77116@list.ru	/img/user_avatars/default.png	admin1	2020-09-18	0	2020-09-16	f
96	admin3	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	ruslan776@list.ru	/img/user_avatars/default.png	admin3	2020-09-11	0	2020-09-27	f
97	admineqweq	8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92	ruslan776@live.ru	/img/user_avatars/default.png	admineqweq	2020-10-07	0	2020-10-08	f
114	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic/27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
115	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic/27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
116	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic/27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
117	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic/27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
118	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic/27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
119	hecz222	6010ce45584e50c45764b2bf5b4a8ac1e0711f6403225e9fdc6aa0a86890a664	hecz222@yandex.ru	http://avatars.mds.yandex.net/get-yapic/27232/jxdAhGDD9DtbrfJQfQyAJlgPdM-1	189f73ed01794a3bb5b956312553b594	2020-10-08	0	2020-10-08	f
\.


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

