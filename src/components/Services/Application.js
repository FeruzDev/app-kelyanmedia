import React, {Component} from 'react';
import Typical from "react-typical"
import AOS from "aos";

class Application extends Component {
    componentDidMount() {
        AOS.init();

    }
    render() {
        return (
            <div className="Application">
                <div className="container">

                    <Typical
                        steps={['СВЯЗАТЬСЯ С НАМИ', 1000, '   ОСТАВЬТЕ ЗАЯВКУ', 2000]}
                        loop={Infinity}
                        wrapper="h3"
                    />
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text "
                                   data-aos="fade-up"
                                   data-aos-easing="linear"
                                   data-aos-duration="1500"
                                   placeholder="Ваше имя"
                                   className="form-control"/>
                          <div className="inputNumber"
                               data-aos="fade-up"
                               data-aos-easing="linear"
                               data-aos-duration="1500"
                               data-aos-delay="300"
                          >
                              <img src="/img/icon/flag.svg" alt=""/>
                              <input

                                  type="text" placeholder="99 8 (99) 999-99-99" className="form-control"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                            <input   data-aos="fade-up"
                                     data-aos-easing="linear"
                                     data-aos-duration="1500"
                                     data-aos-delay="600"
                                     type="email"
                                     placeholder="Ваше email"
                                     className="form-control"/>
                            <button
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                data-aos-delay="1200"
                                className="btn">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;