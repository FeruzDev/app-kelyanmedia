import React, {Component} from 'react';

class Benefits extends Component {
    render() {
        return (
            <div className="Benefits">
                <div className="container">
                    <h2>Что вы получите от работы с нами?</h2>
                    <h3>Ваши выгоды</h3>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="benCard">

                                <div>
                                    <span>1</span>
                                    <h4>Увеличиваем <br/>
                                        продажи</h4>
                                </div>
                                <p>
                                    Находим ответ на 3 главных вопроса, при верном ответе на которые продажи
                                    увеличиваются:
                                </p>

                                <ul>
                                    <li>Как правильно упаковать ваш продукт?</li>
                                    <li>Какие маркетинговые инструменты использовать?</li>
                                    <li>Кто ваша целевая аудитория?</li>
                                </ul>
                                <h1>1</h1>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="benCard">

                                <div>
                                    <span>2</span>
                                    <h4>Сокращаем расходы на <br/>
                                        рекламу</h4>
                                </div>
                                <p>
                                    Получаем максимальные результаты за оптимальные бюджеты. Секрет в грамотной
                                    стратегии и аналитике на всех этапах работы
                                </p>


                                <h1>2</h1>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="benCard">

                                <div>
                                    <span>3</span>
                                    <h4>Экономим время</h4>
                                </div>
                                <p>
                                    Получаем максимальные результаты за оптимальные бюджеты. Секрет в грамотной
                                    стратегии и аналитике на всех этапах работы
                                </p>


                                <h1>3</h1>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="benCard">

                                <div>
                                    <span>4</span>
                                    <h4>Повышаем лояльность <br/>
                                        аудитории</h4>
                                </div>
                                <p>
                                    Современный продающий сайт, уникальный и стильный дизайн, верно настроенная реклама
                                    – при верном подходе все это способно повысить лояльность и ваш имидж среди
                                    аудитории
                                </p>


                                <h1>4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Benefits;