import React, {Component} from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="Jumbotron">
               <div className="container">
                   <div className="col-md-4">
                    <h1>
                        Маркетинговая Диджитал Компания
                    </h1>
                   </div>
                   <div className="col-md-8">
                       <p>
                           Возвышаем вас бизнес на новый уровень и повышаем  продажи
                       </p>
                   </div>

                   <img src="/img/reaceta.png" alt=""/>
               </div>

                <div className="container subHome">
                    <h2>
                        Почему  стоит обратиться к нам?
                    </h2>
                    <h3>
                        Ключевые аспекты продвижения
                    </h3>

                    <ul>
                        <li>
                            <div></div>
                            Выбор социальной сети с наибольшим процентом целевой аудитории бренда
                        </li>
                        <li>
                            <div></div>
                            Анализ деятельности конкурентов и разработка контент-плана
                        </li>
                        <li>
                            <div></div>
                            Анализ реакции аудитории за счет лайков, комментариев и просмотров
                        </li>
                        <li>
                            <div></div>
                            Разработка интерактивов: конкурсов, акций и программы лояльности
                        </li>
                        <li>
                            <div></div>
                            Составление ежемесячного отчета, анализ ошибок и их исправление
                        </li>
                    </ul>
                    <h2>
                        Чем мы вам поможем?
                    </h2>
                </div>

            </div>

        );
    }
}

export default Jumbotron;