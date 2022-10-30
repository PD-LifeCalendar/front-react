// import name from './img/Icon-name.svg'
// import mail from './img/Icon-mail.svg'
// import login from './img/Icon-login.svg'
// import pass from './img/Icon-pass.svg'
// import male from './img/Icon-male.svg'
// import data from './img/Icon-data.svg'
// import illustration from './img/Illustation.svg'
// import logo from './img/Логотип.svg'
import cross from './img/cross.svg'
import ikon_task from './img/Icon_task.svg'
import icon_year from './img/Icon-year.svg'
import icon_kategory from './img/Icon_kategory.svg'
import icon_description from './img/Icon_description.svg'
import icon_plans from './img/Icon_plans.svg'

const AppNewTask = () => {
    return (
        <div className="new_task">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="title">Новая цель:</h1>
                    </div>
                    <div className="offset-md-8 col-md-1">
                        <a href="#"><img className="cross" src={cross} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="forms">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={ikon_task} className="icon_name" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_name">
                            <p className="">Назови свою цель:</p>
                        </div>
                        <div className="offset-md-2 col-md-4 illustration">
                            
                            </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <input id="txtUser" type="text" class="form-control-username" name="username" placeholder="Открыть бизнес в сфере ИТ" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={icon_year} className="icon_input icon_year" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Выбери год</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7"> 
                            {/* <input id="txtUser" type="email" class="form-control-username" name="username" placeholder="30 лет" /> */}
                            <form className="form_p">
                            <select name="hero" class="form-control-username form_p">
                                <option className="form_p" value="s1">10 лет</option>
                                <option className="form_p" value="s2">20 лет</option>
                                <option className="form_p" value="s3" selected >30 лет</option>
                            </select> 
                            </form> 
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={icon_kategory} className="icon_input" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Категория</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            {/* <input id="txtUser" type="text" class="form-control-username" name="username" placeholder="Valera123" /> */}
                            <form className="form_p">
                            <select name="hero" class="form-control-username form_p">
                                <option className="form_p" value="s1">Хозяйство</option>
                                <option className="form_p" value="s2">Спорт</option>
                                <option className="form_p" value="s3" selected >Работа</option>
                            </select> 
                            </form> 
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={icon_description} className="icon_input" alt="name"/>
                        </div>
                        <div className="col-md-3 titl_input">
                            <p className="">Опиши свою цель</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <input id="txtUser" type="text" class="form-control-username-descript" name="username" placeholder="До 30 лет хочу открыть свой бизнес в  сфере ИТ." />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1 icon">
                            <img src={icon_plans} className="icon_input" alt="name"/>
                        </div>
                        <div className="col-md-4 titl_input">
                            <p className="">Добавь промежуточные планы</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <input id="txtUser" type="text" class="form-control-username" name="username" placeholder="Найти офис для аренды" />
                            <input id="txtUser" type="text" class="form-control-username form-control-username-plans" name="username" placeholder="Найти работников" />
                            <input id="txtUser" type="text" class="form-control-username form-control-username-plans" name="username" placeholder="Прописать стратеги развития бизнеса" />
                            <input id="txtUser" type="text" class="form-control-username form-control-username-plans" name="username" placeholder="Сделать сайт компании" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form_btn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <a href="#" className="btn"><p className="btn_text">+</p></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form_btn2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <a href="#" className="btn2"><p className="btn_text">Cоздать +</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppNewTask;