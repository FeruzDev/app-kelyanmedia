import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="Navbar">

            <div className="container">
             <div className="row">
                 <div className="col-md-2">

                     <Link className="navbar-brand" to="/">KELYAN<b >MEDIA</b></Link>
                 </div>
                 <div className="col-md-6">
                     <div className="navbar">
                         <div ><Link to='/' className={`nav-link ${props.history.location.pathname === '/' && 'active'}`}>Главная</Link></div>
                         <div ><Link to='/' className={`nav-link ${props.history.location.pathname === '/cases' && 'active'}`}>Кейсы</Link></div>
                         <div ><Link to='/services' className={`nav-link ${props.history.location.pathname === '/services' && 'active'}`}>Услуги</Link></div>
                         <div ><Link to='/' className={`nav-link ${props.history.location.pathname === '/blog' && 'active'}`}>Блог</Link></div>
                         <div ><Link to='/' className={`nav-link ${props.history.location.pathname === '/about' && 'active'}`}>О нас</Link></div>
                         <div ><Link to='/' className="nav-link lang">RU</Link></div>
                         <div ><Link to='/' className="nav-link lang">EN</Link></div>
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

                              <a href="#!" className='cons rounded-pill'>Бесплатная консультация</a>
                       </div>
                   </div>
                 </div>
             </div>
            </div>
        </div>
    );
};

export default Navbar;