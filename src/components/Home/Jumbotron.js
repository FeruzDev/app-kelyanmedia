import React, {Component} from 'react';
import App from "../App";
import AOS from "aos";
import Typical from "react-typical"
class Jumbotron extends Component {

componentDidMount() {
    AOS.init();

}

    render() {



        return (
            <div className="Jumbotron  ">
             <div>

                 <App/>
                 <div className="container  vh-100">
                     <div className="col-md-4">

                         {/* eslint-disable-next-line react/jsx-no-undef */}
                         <Typical
                             steps={['KELYANMEDIA', 1000, 'Маркетинговая Диджитал Компания', 500]}
                             loop={Infinity}
                             wrapper="h1"
                         />

                     </div>
                     <div className="col-md-8">
                         <p data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                             Возвышаем вас бизнес на новый уровень и повышаем  продажи
                         </p>
                     </div>

                     <img

                          src="/img/reaceta.png" alt=""/>
                 </div>
             </div>

                <div  className="container subHome">
                    <h2 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        Почему  стоит обратиться к нам?
                    </h2>
                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                    >
                        Ключевые аспекты продвижения
                    </h3>

                    <ul>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"

                        >
                            <div></div>
                            Выбор социальной сети с наибольшим процентом целевой аудитории бренда
                        </li>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <div></div>
                            Анализ деятельности конкурентов и разработка контент-плана
                        </li >
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >
                            <div></div>
                            Анализ реакции аудитории за счет лайков, комментариев и просмотров
                        </li>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="900"
                        >
                            <div></div>
                            Разработка интерактивов: конкурсов, акций и программы лояльности
                        </li>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="1200"
                        >
                            <div></div>
                            Составление ежемесячного отчета, анализ ошибок и их исправление
                        </li>
                    </ul>
                    <h2  data-aos="fade-right"
                         data-aos-easing="linear"
                         data-aos-duration="1500">
                        Чем мы вам поможем?
                    </h2>
                </div>

            </div>

        );
    }
}

export default Jumbotron;