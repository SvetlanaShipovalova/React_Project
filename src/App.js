import React from "react";
import './App.css';
import { useState } from 'react';
import {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import * as month from './img/12_month.jpg';
import { FloatingLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//Основные функции приложения

export default function Gallery() {
    //открытие профиля пользователя
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };
    //поля ввода и вывода
    const [text, setText] = useState('');
    const handleTextChange = event => {
        setText(event.target.value);
        var mylog = event.target.value;
    };
    //очистка полей
    const removeText = () => {
        setText(current => {
            setText("");
        });
    };
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className="container_1">
            <style>{'body { background-color: #FFEFD5; }'}</style>
            <div>
                <div className="TabList">
                    <h1 type="button" style={{ textAlign: 'center', marginTop: "20px" }} onClick={refreshPage}>Сказочник</h1>
                    <br /><button id='button' onClick={handleClick}>Мой профиль</button>
                </div>
                {isShown && <section><Content /></section>
                }
                <Search />
            </div>
        </div>
    );
}

//поиск нужной книги и фильтрация по жанру
function Search() {
	
	const useStorageState = (initState) => {
		
		const [loginTerm, setLoginTerm] = useState(localStorage.getItem("login") || initState);
		
		useEffect(() => {
		localStorage.setItem("login", loginTerm);
		},[loginTerm]);
		return [loginTerm, setLoginTerm]
		
	}
	
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState('');
	const [loginTerm, setLoginTerm] = useStorageState('default');

    const searchCards = list.filter(function (item) {
        return filterTerm != "" ? item.title.includes(searchTerm) && item.genre == filterTerm : item.title.includes(searchTerm);
    });
    
    const genres = Array.from(new Set(list.map(function (item) {
        return item.genre;
    })));

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    }
	const loginChange = (event) => {
        setLoginTerm(event.target.value);
    }
    const filterChange = (event) => {
        setFilterTerm(event.target.value);
    }
    return (
        <div>
		<h3>{loginTerm}</h3>
            <Form.Select aria-label="Выберите жанр:" onChange={filterChange} className="btn" id="filter">
                <option>Выберите жанр</option>
                <ListGenres list={genres} />
            </Form.Select>
		    <Form>
		     <Form.Control className="w-65 m-2 alert alert-dark mt-3" id="login" onChange={loginChange}/>
		</Form>
            <input placeholder="Поиск по библиотеке:" className="w-65 m-2 alert alert-dark mt-3" id="search" type='text' onChange={searchChange}></input>
            <br /><br /><ListBooks list={searchCards} />
        </div>
    )
}

//Содержание сайта: авторы
const user = {
    name: "Кенджи Сатоо",
    imageUrl: "https://gas-kvas.com/uploads/posts/2023-02/1675343487_gas-kvas-com-p-art-risunki-dlya-yutuba-8.jpg",
    imageSize: "200px",
    amount_book: 6,
    completed: 4,
    in_process: 2,
    about_user: "Являюсь автором японских сказок. С детства я был увлечен японской культурой и фольклором. Я уделяю особое внимание деталям, чтобы воссоздать атмосферу и уникальность японской культуры в каждой моей сказке. Моя цель - не только развлечь, но и передать важные жизненные уроки и ценности через мои истории. Надеюсь, что мои сказки помогут окунуться в увлекательный мир японской культуры и принесут тепло в сердца всех, кто читает их.",
}
//Содержание сайта: книги
const list = [
    {
        title: 'Двенадцать месяцев',
        author: "С. Я. Маршак",
        count_like: 21625,
        count_pages: 3,
        id: 1,
        annotation: "Каждый месяц идёт друг за другом строго по порядку. Так было всегда. Но однажды этот закон природы был нарушен – среди зимы наступила весна и расцвели подснежники. Случилось это в сказке, которую написал для детей Маршак. Основой сюжета сказки стали народные славянские сказания о братьях-месяцах, встречающихся у костра новогодней ночью… ",
        genre: "Русская сказка",
    },
    {
        title: 'Цветик-семицветик',
        author: "Валентин Катаев",
        count_like: 12367,
        count_pages: 4,
        id: 2,
        annotation: "Про девочку, которая получила в подарок семь желаний! И очень глупо их растратила. И только последнее желание оказалось добрым и полезным. Очень мудрая история, пригодится не только детям, но и взрослым.",
        genre: "Русская сказка",
    },
    {
        title: 'Кот в сапогах',
        author: "Шарль Перро",
        count_like: 12367,
        count_pages: 4,
        id: 3,
        annotation: "Представьте себе, что почувствовал Жак, когда узнал, что его старшие братья получили в наследство мельницу и осла, а он - всего лишь кота. Вот только это необычный кот. И у кота есть гениальный план. Вместе с Жаком им предстоит пройти испытания, раскрывая тайны и отгадывая загадки, чтобы в конце получить долгожданную награду.",
        genre: "Французская сказка",
    },
];

const ListGenres = (props) => {
    return (
        <>
            {props.list.map(function (item) {
                return <option>{item}</option>
            })}
        </>
    );
}
//Библиотека
const ListBooks = (props) => {
    return (
        <div>
            <Row>
                {props.list.map(function (item) {
                    return <Col key={item.id} style={{ alignItems: 'center' }}>
                        <Card style={{ width: 'auto', background: '#f5d69d' }}>
                            <Card.Body>
                                <div className="card_book">
                                    <div className="book1"><Card.Title className="book1" style={{ display: 'inline-block' }}>{item.title}</Card.Title>
                                        <svg style={{ display: 'inline-block', float: 'right' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                        </svg>
                                    </div>
                                    <div className="book2"><ListGroup.Item className="book2"><h4 style={{ fontWeight: "bold" }}>Аннотация:</h4>{item.annotation}</ListGroup.Item> </div>
                                    <div className="book3"><ListGroup.Item className="book3"><h4 style={{ fontWeight: "bold" }}>Автор:</h4><h5>{item.author}</h5></ListGroup.Item>
                                        <p style={{ borderStyle: "solid", borderLeft: 0, borderBottom: 0, borderRight: 0 }}>{item.genre}</p>

                                    </div>
                                    <div className="book4"><ListGroup.Item className="book4">
                                        <svg style={{ display: "block", margin: "auto", color: "#f26362" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                        <br></br><p style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", borderStyle: "solid", borderLeft: 0, borderBottom: 0, borderRight: 0, paddingTop: "20px" }}>{item.count_like}</p></ListGroup.Item>
                                    </div>
                                    <div className="book5"><ListGroup.Item className="book5">
                                        <svg style={{ display: "block", margin: "auto" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-journals" viewBox="0 0 16 16">
                                            <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                            <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                        </svg>
                                        <br></br><p style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", borderStyle: "solid", borderLeft: 0, borderBottom: 0, borderRight: 0, paddingTop: "20px" }}>{item.count_pages}</p></ListGroup.Item></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </div>
    );
}
//Профиль пользователя
function Profile() {
    return (
        <div className="m-3 text-center"><h2>{user.name}</h2>
            <img className="mx-auto d-block"
                src={user.imageUrl}
                alt={user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    border: "4mm ridge rgba(211, 220, 50, .6)",
                }}
            />
            <div className="container d-flex justify-content-center mt-4">
                <div className="card p-3 py-4">
                    <div className="text-center">
                        <h3 className="mt-">{user.name}</h3>
                        <span className="mt-1 clearfix">Писатель</span>

                        <div className="row mt-3 mb-3">

                            <div className="col-md-4">
                                <h5 className="font-weight-bold fs-6">Всего</h5>
                                <span className="num">{user.amount_book}</span>
                            </div>
                            <div className="col-md-4">
                                <h5 className="font-weight-bold fs-6">Завершено</h5>
                                <span className="num">{user.completed}</span>
                            </div>
                            <div className="col-md-4">
                                <h5 className="font-weight-bold fs-6">В процессе</h5>
                                <span className="num">{user.in_process}</span>
                            </div>
                        </div>
                        <hr className="line" />
                        <small className="mt-4">{user.about_user}</small>
                    </div>
                </div>
            </div>
        </div>

    );
}

function Content() {
    return (
        <div className="layout">
            <div id="profile"><Profile /></div>
            <div id="library"><Box_1 /></div>
        </div>
    );
}
// Книги пользователя
function Box_1() {
    return (
        <div>
            <section>
                <h1 style={{ fontSize: "36px", margin: "5px", textAlign: "center" }}>Мои книги</h1>
                <div className="box">
                    <div id='img_box'><img
                        src={require('./img/book_1.jpg')}
                        alt="Гомбей-птицелов"
                    />
                        <h1 id='text'>Гомбей-птицелов</h1></div>
                    <div id='img_box'><img
                        src={require('./img/book_2.jpg')}
                        alt="Веер Тэнгу"
                    />
                        <h1 id='text'>Веер Тэнгу</h1></div>

                    <div id='img_box'><img
                        src={require('./img/book_9.jpg')}
                        alt="Бог горы и рыба Окодзэ"
                    />
                        <h1 id='text'>Бог горы и рыба Окодзэ</h1></div>
                    <div id='img_box'><img
                        src={require('./img/book_8.jpg')}
                        alt="Бог грозы Сомбуцу"
                    />
                        <h1 id='text'>Бог грозы Сомбуцу</h1></div>
                    <div id='img_box'><img
                        src={require('./img/book_3.jpg')}
                        alt="Две лягушки"
                    />
                        <h1 id='text'>Две лягушки</h1></div>
                    <div id='img_box'><img
                        src={require('./img/book_7.jpg')}
                        alt="Большой праздник белой лисы"
                    />
                        <h1 id='text'>Праздник белой лисы</h1></div>

                </div>
            </section>
            <section> </section>
        </div>
    );
}

function Box_2() {
    return (
        <div>
            <section>
                <div className="box">
                    <div id='img_box'><img
                        src={require('./img/book_4.jpg')}
                        alt="Пастух и королевская дочь"
                    />
                        <h1 id='text'>Пастух и королевская дочь</h1></div>
                    <div id='img_box'><img
                        src={require('./img/book_5.jpg')}
                        alt="Волк, улитка и осы"
                    />
                        <h1 id='text'>Волк, улитка и осы</h1></div>
                    <div id='img_box'><img
                        src={require('./img/book_6.jpg')}
                        alt="Портной и Вихрь"
                    />
                        <h1 id='text'>Портной и Вихрь</h1></div>
                </div>
            </section>
            <section> </section>
        </div>
    );
}