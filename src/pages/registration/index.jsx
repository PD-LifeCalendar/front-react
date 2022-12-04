import React from 'react';

import './appRegistration.css';
import './bootstrap.min.css';

import name from './img/Icon-name.svg'
import mail from './img/Icon-mail.svg'
import login from './img/Icon-login.svg'
import pass from './img/Icon-pass.svg'
import male from './img/Icon-male.svg'
import data from './img/Icon-data.svg'
import illustration from './img/Illustation.svg'
import logo from './img/Логотип.svg'



export const Registration = () => (
    <appRegistration>
        <div className="registration">
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="title">Регистрация</h1>
                        </div>
                        <div className="offset-md-1 col-md-7 illustration">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="forms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={name} className="icon_name" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_name">
                            <p className="">Введите ваше имя</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <input id="txtUser" type="text" class="form-control-username" name="username" placeholder="Валера" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={mail} className="icon_input icon_mail" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Введите почту</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <input id="txtUser" type="email" class="form-control-username" name="username" placeholder="Valera@yandex.ru" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={login} className="icon_input" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Введите логин</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <input id="txtUser" type="text" class="form-control-username" name="username" placeholder="Valera123" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={pass} className="icon_input" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Введите пароль</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <input id="txtUser" type="password" class="form-control-username" name="username" placeholder="********" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={male} className="icon_input" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Выберите ваш пол</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <input id="txtUser" type="text" class="form-control-username" name="username" placeholder="Женский" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={data} className="icon_input" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Введите дату рождения</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <input id="txtUser" type="date" class="form-control-username" name="username" placeholder="11.11.2001" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form_btn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a href="#" className="btn"><p className="btn_text">Зарегистрироваться</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-1 col-md-2">
                            <img src={logo} alt="logo" className="logo_footer" />
                        </div>
                        <div className="col-md-2 hrf1">
                            <div className="row hrf2">
                                <a href="#"><p>Скачать приложение</p></a>
                            </div>
                            <div className="row">
                                <a href="#"><p>Веб-версия</p></a>
                            </div>
                        </div>
                        <div className="col-md-2 hrf1">
                            <div className="row hrf2">
                                <a href="#"><p>О нас</p></a>
                            </div>
                            <div className="row">
                                <a href="#"><p>Партнеры</p></a>
                            </div>
                        </div>
                        <div className="col-md-2 hrf1">
                            <div className="row hrf2">
                                <a href="#"><p>Обратная связь</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 polytech">
                            <p>@мосполитех 2022</p>
                            <p>Лаборатория инициативных проектов <br /> “Календарь жизни”</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </appRegistration>
)

export default Registration;