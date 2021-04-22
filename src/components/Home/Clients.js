import React, {Component} from 'react';
import Slider from "react-slick";

import {Link} from "react-router-dom";
import AOS from "aos";

class Clients extends Component {

    componentDidMount() {
        AOS.init();

    }


    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false

        };

        return (
            <div className="Clients">
                <div className="container">
                    <h2 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        Кто нам доверяет?
                    </h2>
                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        КЛИЕНТЫ
                    </h3>


                        <Slider {...settings} >
                            <div className="carouselItem">
                                <img src="/img/progress.png" alt=""/>
                            </div>
                            <div className="carouselItem">
                                <img src="/img/dasita.svg" alt=""/>
                            </div>
                            <div className="carouselItem">
                                <img src="/img/paradise.svg" alt=""/>
                            </div>
                            <div className="carouselItem">
                                <img src="/img/thomas.svg" alt=""/>
                            </div>

                        </Slider>




                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Вы дочитали наше предложение?
                    </h3>
                    <p data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1200">
                        Значит, можете самостоятельно убедиться в нашем навыке раскрывать продукт перед целевой
                        аудиторией!

                    </p>
                    <p data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1200"

                       data-aos-delay="300"
                    >
                        Оставьте свои контактные данные, обсудим ваш проект и начнем готовить концепции, чтобы донести
                        суть вашего предложения в дизайне
                    </p>

                    <div className="row">
                        <div className="col-md-6"

                             data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"

                        >
                            <div className="row">
                                <div className="hour">
                                    <div />
                                    <h1>
                                        0

                                    </h1>
                                </div>

                                <div className="hour ml-1">
                                    <div />
                                    <h1>
                                        0
                                    </h1>
                                </div>

                                <div className="hour ml-3">
                                    <div />
                                    <h1>
                                        0
                                    </h1>
                                </div>

                                <div className="hour ml-1">
                                    <div />
                                    <h1>
                                        0
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"

                             data-aos="fade-left"
                             data-aos-easing="linear"
                             data-aos-duration="1200">

                            <p>
                                Оставьте заявку на бесплатный разбор вашего бизнеса
                            </p>
                            <Link>
                                Оставить заявку
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Clients;