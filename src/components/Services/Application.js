import React, {Component} from 'react';

class Application extends Component {
    render() {
        return (
            <div className="Application">
                <div className="container">
                    <h3>
                        ОСТАВЬТЕ ЗАЯВКУ
                    </h3>

                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Ваше имя" className="form-control"/>
                          <div className="inputNumber">
                              <img src="/img/icon/flag.svg" alt=""/>
                              <input type="text" placeholder="99 8 (99) 999-99-99" className="form-control"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                            <input type="email" placeholder="Ваше email" className="form-control"/>
                            <button className="btn">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;