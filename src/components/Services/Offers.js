import React, {Component} from 'react';
import AOS from "aos";

class Offers extends Component {

    componentDidMount() {
        AOS.init();

    }
    render() {

        return (
            <div className="Offers">
                <div className="container">
                    <h3  data-aos="fade-right"
                         data-aos-easing="linear"
                         data-aos-duration="1200"
                         className="styles_typicalWrapper__1_Uvh"
                    >ЧТО МЫ ПРЕДЛАГАЕМ?</h3>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200">

                                <div>
                                   <span className="numberBack">
                                        <span>1</span>
                                    </span>
                                    <h4>Публикации</h4>
                                </div>
                                <p>
                                    Мы исследуем Ваш бизнес, проанализируем нишу и конкурентность на рынке, выявим самые
                                    рентабельные способы продвижения
                                </p>


                                <h1>1</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="300">

                                <div>
                                     <span className="numberBack">
                                        <span>2</span>
                                    </span>
                                    <h4>Таргетированная реклама</h4>
                                </div>
                                <p>
                                    Исходя из анализа создадим бренд и разработаем все необходимые представительства в
                                    социальных сетях, включая продающий веб-сайт
                                </p>


                                <h1>2</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="600">

                                <div>
                                    <span className="numberBack">
                                        <span>3</span>
                                    </span>
                                    <h4>Изучение конкурентов</h4>
                                </div>
                                <p>
                                    Составим вместе с вами ваше уникальное торговое предложение и принесем вам первых
                                    клиентов с помощью стратегического интернет маркетинга
                                </p>


                                <h1>3</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200">

                                <div>
                                    <span className="numberBack">
                                        <span>4</span>
                                    </span>
                                    <h4>Рекомендации по <br/> улучшению бизнеса <br/>
                                        аудитории</h4>
                                </div>
                                <p>
                                    Мы исследуем Ваш бизнес, проанализируем нишу и конкурентность на рынке, выявим самые
                                    рентабельные способы продвижения
                                </p>


                                <h1>4</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="300">

                                <div>
                                     <span className="numberBack">
                                        <span>5</span>
                                    </span>
                                    <h4>Создание комьюнити <br/> для вашего бренда</h4>
                                </div>
                                <p>
                                    Исходя из анализа создадим бренд и разработаем все необходимые представительства в
                                    социальных сетях, включая продающий веб-сайт
                                </p>


                                <h1>5</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="600">

                                <div>
                                     <span className="numberBack">
                                        <span>6</span>
                                    </span>
                                    <h4>Привлечения людей </h4>
                                </div>
                                <p>
                                    Составим вместе с вами ваше уникальное торговое предложение и принесем вам первых
                                    клиентов с помощью стратегического интернет маркетинга
                                </p>


                                <h1>6</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Offers;