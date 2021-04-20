import React, {Component} from 'react';

class Services extends Component {
    render() {
        return (
            <div className="Services">

                <div className="container">
                    <h3>УСЛУГИ</h3>

                    <div className="row">
                        <div className="col-md-4">
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



                        <div className="col-md-4">
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


                        <div className="col-md-4">
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