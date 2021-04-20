import React, {Component} from 'react';

class Company extends Component {
    render() {
        return (
            <div className="Company">
                <div className="row">
                    <div className="col-md-6">
                        <h3>
                            Метод работы
                        </h3>
                        <p>Наш подход работы является системным и каждое действие сверяется рабочей проработаной
                            методологий дающей нужные результаты</p>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/reb1.svg" alt=""/>
                    </div>


                    <div className="col-md-6">
                        <img src="/img/reb2.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            История компании
                        </h3>
                        <p>Рекламное агентство появилось летом 2020 года и каждый день становится больше, набирает
                            обороты, увеличивает комьюнити в социальных сетях и достигает все более амбициозных
                            целей</p>
                    </div>


                    <div className="col-md-6">
                        <h3>
                            Наша команда
                        </h3>
                        <p>Наш подход работы является системным и каждое действие сверяется рабочей проработаной
                            методологий дающей нужные результаты</p>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/reb3.svg" alt=""/>
                    </div>

                </div>




                <div className="ourTeam">
                 <div className="container">
                     <h2>Кто с вами будет работать?</h2>
                     <h3>НАША КОМАНДА</h3>


                  <div className="ourList">
                      <div className="ourTeamCard ">
                          <img  className="w-100" src="/img/ourTeam1.svg" alt=""/>
                          <h1 >Алтыбаев Руслан</h1>
                          <span>Дизайнер</span>
                      </div>


                      <div className="ourTeamCard ">
                          <img  className="w-100" src="/img/ourTeam2.svg" alt=""/>
                          <h1 >Агаси Аракелян </h1>
                          <span>Маркетолог</span>
                      </div>

                      <div className="ourTeamCard ">
                          <img  className="w-100" src="/img/ourTeam3.svg" alt=""/>
                          <h1 >Данил Лапин </h1>
                          <span>Арт директор</span>
                      </div>


                      <div className="ourTeamCard ">
                          <img  className="w-100" src="/img/ourTeam4.svg" alt=""/>
                          <h1 >Хусан Мадамбеков </h1>
                          <span>Дизайнер</span>
                      </div>


                      <div className="ourTeamCard ">
                          <img  className="w-100" src="/img/ourTeam5.svg" alt=""/>
                          <h1 >Хашимова Севара </h1>
                          <span>Копирайтер</span>
                      </div>


                      <div className="ourTeamCard ">
                          <img  className="w-100" src="/img/ourTeam6.svg" alt=""/>
                          <h1 >Алина Осипова</h1>
                          <span  >Аккаунт менеджер</span>
                      </div>
                  </div>
                 </div>
                </div>
            </div>
        );
    }
}

export default Company;