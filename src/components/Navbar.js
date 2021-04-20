import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">

            <div className="container">
             <div className="row">
                 <div className="col-md-2">

                     <a className="navbar-brand" href="#">KELYAN<b >MEDIA</b></a>
                 </div>
                 <div className="col-md-6">
                     <div className="navbar">
                         <div className="nav-link"><a>Главная</a></div>
                         <div className="nav-link"><a>Кейсы</a></div>
                         <div className="nav-link"><a>Услуги</a></div>
                         <div className="nav-link"><a>Блог</a></div>
                         <div className="nav-link"><a>О нас</a></div>
                         <div className="nav-link"><a>RU</a></div>
                         <div className="nav-link"><a>EN</a></div>
                     </div>
                 </div>
                 <div className="col-md-4">
                   <div className="navbar">
                       <div className="nav-link">
                           <a href="#!">     <img src="/img/icon/tg.svg" alt=""/> </a>
                       </div>
                       <div className="nav-link">
                           <a href="#!"> <img src="/img/icon/ins.svg" alt=""/></a>
                       </div>
                       <div className="nav-link">

                              <a className='cons rounded-pill'>Бесплатная консультация</a>
                       </div>
                   </div>
                 </div>
             </div>
            </div>
        </div>
    );
};

export default Navbar;