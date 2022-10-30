import logo from './img/Логотип.svg';
import ikonBtn from './img/Ikon-btn.svg';
import language from './img/Language.svg';
import theme from './img/Theme.svg';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div class="header">
                <div class="naw">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-1">
                                <img class="logo" src={logo} alt="Логотип"/>
                                
                            </div>
                            <div class="col-md-7 naw_p-s">
                                <a href=""><p>Главная</p></a>
                                <a href=""><p class="naw_p">Календарь жизни</p></a>
                                <a href=""><p class="naw_p">Дневник</p></a>
                                <a href=""><p class="naw_p">Цели</p></a>
                                <a href=""><p class="naw_p">Достижения</p></a>
                            </div>
                            <div class="col-md-2">
                                <a href="#" class="naw_btn">
                                    <p class="naw_p-s naw_p-btn">Вход</p>
                                    <img class="ikon-btn" src={ikonBtn} alt="ikon"/>
                                </a>
                            </div>
                            <div class="col-md-2 t-l">
                                <a href="#" class="theme">
                                    <img class="theme-language" src={theme} alt="theme"/>
                                </a>
                                <a href="#" class="language">
                                    <img class="theme-language" src={language} alt="language"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;