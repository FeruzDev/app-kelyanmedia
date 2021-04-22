import React, {Component} from 'react';
import AOS from "aos";

class Services extends Component {



    componentDidMount() {
        AOS.init();

    }

    render() {
        return (
            <div className="Services">

                <div className="container">
                    <h3
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">УСЛУГИ</h3>

                    <div className="row">
                        <div className="col-md-4"
                             data-aos="flip-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000">
                            <div className="serCard">


                                <img src="/img/rec1.png" alt="img..."/>

                                  <h4>SMM</h4>
                                  <ul>
                                      <li>Создание уникального стиля</li>
                                      <li>Аналитика конкурентов</li>
                                      <li>Точное определение аудитории</li>
                                      <li>Проработка сильных сторон</li>
                                      <li>Реклама в соц сетях</li>
                                      <hr/>

                                  </ul>
                               <div  >
                                   <a href="#!" className="rounded-pill">Подробнее</a>
                               </div>
                            </div>
                        </div>



                        <div className="col-md-4"
                             data-aos="flip-up"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000"
                        >
                            <div className="serCard">


                                <img src="/img/rec2.png" alt="img..."/>

                                <h4>Брендинг</h4>
                                <ul>
                                    <li>Создание уникального стиля</li>
                                    <li>Аналитика конкурентов</li>
                                    <li>Точное определение аудитории</li>
                                    <li>Проработка сильных сторон</li>
                                    <li>Реклама в соц сетях</li>
                                    <hr/>

                                </ul>
                                <div  >
                                    <a href="#!" className="rounded-pill">Подробнее</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4"
                             data-aos="flip-right"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000">
                            <div className="serCard">


                                <img src="/img/rece.png" alt="img..."/>

                                <h4>Упаковка</h4>
                                <ul>
                                    <li>Создание уникального стиля</li>
                                    <li>Аналитика конкурентов</li>
                                    <li>Точное определение аудитории</li>
                                    <li>Проработка сильных сторон</li>
                                    <li>Реклама в соц сетях</li>
                                    <hr/>

                                </ul>
                                <div  >
                                    <a href="#!" className="rounded-pill">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Services;