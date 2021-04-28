import React, {Component} from 'react';
import AOS from "aos";

class Benefits extends Component {

    componentDidMount() {
        AOS.init();

    }

    render() {
        return (
            <div className="Benefits">
                <div className="container">
                    <h2 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">Что вы получите от работы с нами?</h2>
                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="styles_typicalWrapper__1_Uvh"

                    >Ваши выгоды</h3>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000">

                                <div>
                                    <span className="numberBack">
                                        <span>1</span>
                                    </span>
                                    <h4>Увеличиваем <br/>
                                        продажи</h4>
                                </div>
                                <p>
                                    Находим ответ на 3 главных вопроса, при верном ответе на которые продажи
                                    увеличиваются:
                                </p>

                                <ul>
                                    <li>Как правильно упаковать ваш продукт?</li>
                                    <li>Какие маркетинговые инструменты использовать?</li>
                                    <li>Кто ваша целевая аудитория?</li>
                                </ul>
                                <h1>1</h1>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000"
                                 data-aos-delay="300">

                                <div>
                                   <span className="numberBack">
                                        <span>2</span>
                                    </span>
                                    <h4>Сокращаем расходы <br/>на
                                        рекламу</h4>
                                </div>
                                <p>
                                    Получаем максимальные результаты за оптимальные бюджеты. Секрет в грамотной
                                    стратегии и аналитике на всех этапах работы
                                </p>


                                <h1>2</h1>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000"
                                 data-aos-delay="600">

                                <div>
                                   <span className="numberBack">
                                        <span>3</span>
                                    </span>
                                    <h4>Экономим время</h4>
                                </div>
                                <p>
                                    Получаем максимальные результаты за оптимальные бюджеты. Секрет в грамотной
                                    стратегии и аналитике на всех этапах работы
                                </p>


                                <h1>3</h1>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000"
                                 data-aos-delay="900">

                                <div>
                                   <span className="numberBack">
                                        <span>4</span>
                                    </span>
                                    <h4>Повышаем лояльность <br/>
                                        аудитории</h4>
                                </div>
                                <p>
                                    Современный продающий сайт, уникальный и стильный дизайн, верно настроенная реклама
                                    – при верном подходе все это способно повысить лояльность и ваш имидж среди
                                    аудитории
                                </p>


                                <h1>4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Benefits;