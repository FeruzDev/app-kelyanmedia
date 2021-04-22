import React, {Component} from 'react';
import Typical from "react-typical"
import AOS from "aos";


class Footer extends Component {

    componentDidMount() {
        AOS.init();

    }
    render() {
        return (
            <div className="Footer">

                  <div className="container">
                    <div className="line" />
                    <h2 data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >Давайте работать вместе!</h2>

                      <Typical
                          steps={['СВЯЖИТЕСЬ С НАМИ', 1000, 'НУЖЕН УСПЕШНЫЙ ПРОЕКТ?', 2500]}
                          loop={Infinity}
                          wrapper="h3"
                      />

                      <div className="row">
                          <a href="#!" data-aos="fade-up"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                          >
                              <img src="/img/icon/tg.svg" alt=""/>
                          </a>
                          <a href="#!" data-aos="fade-up"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             data-aos-delay="200"
                          >
                              <img src="/img/icon/ins.svg" alt=""/>
                          </a>
                          <a href="#!"
                             data-aos="fade-up"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             data-aos-delay="400"
                          >
                              <img src="/img/icon/fc.svg" alt=""/>
                          </a>
                      </div>

                      <h2 data-aos="fade-right"
                          data-aos-easing="linear"
                          data-aos-duration="1500"

                      >Вы ещё думаете заказать у нас пакет или нет?</h2>
                      <h2 data-aos="fade-left"
                          data-aos-easing="linear"
                          data-aos-duration="1500"
                          >Телефон для связи <img src="/img/icon/phone.svg" className="ml-3" alt=""/> <span>+99 8 33 339 3334</span></h2>
                      <p data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1500"
                         data-aos-delay="100">
                          Пора бы уже сделать стремительный шаг в развитие вашего бизнеса!
                      </p>

                      <div className="line" />
                      <h6 data-aos="zoom-in"
                          data-aos-easing="linear"
                          data-aos-duration="1500"
                          data-aos-delay="100">© 2021 KELYAN MEDIA</h6>
                  </div>

            </div>
        );
    }
}

export default Footer;