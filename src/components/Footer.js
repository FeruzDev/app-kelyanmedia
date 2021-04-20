import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                  <div className="container">
                    <div className="line" />
                    <h2>Давайте работать вместе!</h2>
                      <h3>НУЖЕН УСПЕШНЫЙ ПРОЕКТ?</h3>
                      <div className="row">
                          <a href="#!">
                              <img src="/img/icon/tg.svg" alt=""/>
                          </a>
                          <a href="#!">
                              <img src="/img/icon/ins.svg" alt=""/>
                          </a>
                          <a href="#!">
                              <img src="/img/icon/fc.svg" alt=""/>
                          </a>
                      </div>

                      <h2>Вы ещё думаете заказать у нас пакет или нет?</h2>
                      <h2>Телефон для связи <img src="/img/icon/phone.svg" className="ml-3" alt=""/> <span>+99 8 33 339 3334</span></h2>
                      <p>
                          Пора бы уже сделать стремительный шаг в развитие вашего бизнеса!
                      </p>

                      <div className="line" />
                      <h6>© 2021 KELYAN MEDIA</h6>
                  </div>

            </div>
        );
    }
}

export default Footer;