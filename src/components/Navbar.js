import React, {useState} from 'react';
import {Link} from "react-router-dom";



const Navbar = (props) => {

    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);


    const [isOpen, setOpen] = useState(false);

    const OpenFalse = () => setOpen(!isOpen);
    return (

        <div className="Navbar ">

            <div className="sideMenu d-none">
                <img className="telIcon" src="/img/icon/tel.png" alt=""/>
                <Link className="navbar-brand" to="/">KELYAN<b >MEDIA</b></Link>
                <button onClick={toggleTrueFalse} className="  bg-transparent border-0 sibeBarToggle">
                    <img  src="/img/icon/burger.png" alt=""/>
                </button>
            </div>
            <div className="container mainNavbar">
             <div className="row">
                 <div className="col-md-2">
                     <Link className="navbar-brand" to="/">KELYAN<b >MEDIA</b></Link>
                 </div>
                 <div className="col-md-6">
                     <div className="navbar">
                         <div ><Link to='/' className={`nav-link ${props.history.location.pathname === '/' && 'active'}`}>Главная</Link></div>
                         <div ><Link to='/cases' className={`nav-link ${props.history.location.pathname === '/cases' && 'active'}`}>Кейсы</Link></div>



                         <div className="dropdownFather">

                             <div className="dropdown-toggle" ><Link to='/services' className={`nav-link ${props.history.location.pathname === '/services' && 'active'}`}>Услуги</Link></div>

                             <div     className="drobdownMenuFather d-none">

                                 <div className="dropdownMenu">
                                     <div ><Link to='/smm' className={`nav-link ${props.history.location.pathname === '/smm' && 'active'}`}>СММ</Link></div>
                                     <div ><Link to='/marceting' className={`nav-link ${props.history.location.pathname === '/marceting' && 'active'}`}>Реальный маркетинг</Link></div>
                                     <div ><Link to='/logo-page' className={`nav-link ${props.history.location.pathname === '/logo-page' && 'active'}`}>Упаковка</Link></div>

                                 </div>
                             </div>
                         </div>
                         <div ><Link to='/blog' className={`nav-link ${props.history.location.pathname === '/blog' && 'active'}`}>Блог</Link></div>
                         <div ><Link to='/about' className={`nav-link ${props.history.location.pathname === '/about' && 'active'}`}>О нас</Link></div>
                         <div ><Link to='/' className="nav-link lang">RU</Link></div>
                         <div ><Link to='/' className="nav-link lang">EN</Link></div>
                     </div>
                 </div>
                 <div className="col-md-4">
                   <div className="navbar">
                       <div className="nav-link">
                           <a href="https://t.me/kelyanmedia" target="_blank" >   <img src="/img/icon/tg.svg" alt=""/> </a>
                       </div>
                       <div className="nav-link">
                           <a href="https://www.instagram.com/kelyanmedia/" target="_blank"> <img src="/img/icon/ins.svg" alt=""/></a>
                       </div>
                       <div className="nav-link">

                              <a href="#!" className='cons rounded-pill'>Бесплатная консультация</a>
                       </div>

                   </div>
                 </div>
             </div>
            </div>






            <div className={isToggled ? "d-block" : "d-none"} id="sideBar">

                <div className="row d-none">
                        <div className="navbar">
                            <div className="d-flex align-items-center"><div className="navDots mt-4" /><Link to='/' className={`nav-link ${props.history.location.pathname === '/' && 'active'}`}>Главная</Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-4" /><Link to='/cases' className={`nav-link ${props.history.location.pathname === '/cases' && 'active'}`}>Кейсы</Link></div>

                            <div className="dropdownFather   ">

                                <div className="d-flex align-items-center">
                                    <div className="navDots  mr-2" />
                                    <button className="dropdown-toggle" onClick={OpenFalse} >Услуги</button>

                                </div>
                                <div     id="drobdownMenuFather" className={isOpen ? "d-block" : "d-none"}>

                                    <div className="dropdownMenu">
                                        <div><div className="minus" /><Link to='/services' className={`nav-link ${props.history.location.pathname === '/services' && 'active'}`}>Услуги</Link></div>
                                        <div ><div className="minus" /><Link to='/smm' className={`nav-link ${props.history.location.pathname === '/smm' && 'active'}`}>СММ</Link></div>
                                        <div ><div className="minus" /><Link to='/marceting' className={`nav-link ${props.history.location.pathname === '/marceting' && 'active'}`}>Реальный маркетинг</Link></div>
                                        <div ><div className="minus" /><Link to='/logo-page' className={`nav-link ${props.history.location.pathname === '/logo-page' && 'active'}`}>Упаковка</Link></div>

                                    </div>
                                </div>
                            </div>


                            {/*<div  className="d-flex align-items-center"><div className="navDots mt-4" /><Link to='/services' className={`nav-link ${props.history.location.pathname === '/services' && 'active'}`}>Услуги</Link></div>*/}
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link to='/blog' className={`nav-link ${props.history.location.pathname === '/blog' && 'active'}`}>Блог</Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link to='/about' className={`nav-link ${props.history.location.pathname === '/about' && 'active'}`}>О нас</Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link to='/' className="nav-link lang">RU</Link></div>
                            <div  className="d-flex align-items-center"><div className="navDots mt-2" /><Link to='/' className="nav-link lang">EN</Link></div>
                        </div>
                    <div className="contactNav d-flex">
                        <div className="navbar w-100  flex-wrap ">
                            <div className="w-100 flex-nowrap d-flex mb-5">
                                <div className="nav-link">
                                    <a href="#!">     <img src="/img/icon/tg.svg" alt=""/> </a>
                                </div>
                                <div className="nav-link ml-3">
                                    <a href="#!"> <img src="/img/icon/ins.svg" alt=""/></a>
                                </div>
                            </div>
                            <div className="nav-link w-100 position-relative">

                                <a href="#!" className='cons rounded-pill'>Бесплатная консультация</a>
                            </div>

                            <div className="lineNav" />

                            <span>© 2021 KELYAN MEDIA</span>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Navbar;