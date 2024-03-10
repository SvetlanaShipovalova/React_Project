import React from "react";
import './App.css';
import { useState } from 'react';

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
    return (
        <div className="container_1">
            <style>{'body { background-color: #FFEFD5; }'}</style>
            <div>
                <div className="TabList">
                    <h1 style={{ textAlign: 'center', marginTop: "20px" }}>Сказочник</h1>
                    <button id='button' onClick={handleClick}>Мой профиль</button>
                    <label className="text_input" htmlFor="text">Введите ключ</label>
                    <textarea className="text_input" style={{ color: "black" }}
                        id="text" name="text" value={text} onChange={handleTextChange}
                    />
                    <h4 className="text_input">{text}</h4>
                    <button className="text_input" style={{ color: "black" }} onClick={removeText}>Стереть</button>
                </div>
                {isShown && <section><Content /></section>
                }
            </div>
        </div>
    );
}

const user = {
    name: "Кенджи Сатоо",
    imageUrl: "https://gas-kvas.com/uploads/posts/2023-02/1675343487_gas-kvas-com-p-art-risunki-dlya-yutuba-8.jpg",
    imageSize: "200px",
    amount_book: 6,
    completed: 4,
    in_process: 2,
    about_user: "Являюсь автором японских сказок. С детства я был увлечен японской культурой и фольклором. Я уделяю особое внимание деталям, чтобы воссоздать атмосферу и уникальность японской культуры в каждой моей сказке. Моя цель - не только развлечь, но и передать важные жизненные уроки и ценности через мои истории. Надеюсь, что мои сказки помогут окунуться в увлекательный мир японской культуры и принесут тепло в сердца всех, кто читает их.",
}

function Profile() {
    return (
        <div class="m-3 text-center"><h2>{user.name}</h2>
            <img class="mx-auto d-block"
                src={user.imageUrl}
                alt={user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    border: "4mm ridge rgba(211, 220, 50, .6)",
                }}
            />
            <div class="container d-flex justify-content-center mt-4">
                <div class="card p-3 py-4">
                    <div class="text-center">
                        <h3 class="mt-">{user.name}</h3>
                        <span class="mt-1 clearfix">Писатель</span>

                        <div class="row mt-3 mb-3">

                            <div class="col-md-4">
                                <h5 class="font-weight-bold fs-6">Всего</h5>
                                <span class="num">{user.amount_book}</span>
                            </div>
                            <div class="col-md-4">
                                <h5 class="font-weight-bold fs-6">Завершено</h5>
                                <span class="num">{user.completed}</span>
                            </div>
                            <div class="col-md-4">
                                <h5 class="font-weight-bold fs-6">В процессе</h5>
                                <span class="num">{user.in_process}</span>
                            </div>
                        </div>
                        <hr class="line" />
                        <small class="mt-4">{user.about_user}</small>
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