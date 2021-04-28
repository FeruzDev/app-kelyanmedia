import React, {Component} from 'react';
import AOS from "aos";
import Typical from "react-typical"
class LogoMarceting extends Component {

    componentDidMount() {
        AOS.init();

    }
    render() {
        return (
            <div className="Marceting">


                <div className="container">

                    <div className="row">
                        <div className="col-6">
                            <h3 data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="styles_typicalWrapper__1_Uvh"
                            >
                                Уникальный логотип
                            </h3>
                            <p data-aos="fade-right"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300"
                            >
                                Важно не только то насколько красивый у вас логотип. Большую роль играет сочетание
                                смыслов которые несёт ваша компания, визуального посыла и включающих в него атрибутов
                                различия
                            </p>
                        </div>
                        <div className="col-6">
                            <div className="animCircle" data-aos="zoom-in"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000">

                            </div>
                        </div>


                        <div className="col-6">
                            <div className="animCircle2"  className="animCircle" data-aos="zoom-in"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000">

                            </div>
                        </div>
                        <div className="col-6">
                            <h3 data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="styles_typicalWrapper__1_Uvh"

                            >
                                Гармоничный гайдлайн
                            </h3>
                            <p data-aos="fade-left"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300">
                                То как используются цвета и расположение ключевых элементов в вашей компании зависит его
                                узнаваемость и ценность.
                            </p>
                        </div>

                    </div>

                </div>



            </div>
        );
    }
}

export default LogoMarceting;