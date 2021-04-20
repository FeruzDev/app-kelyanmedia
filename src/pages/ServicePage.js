import React from 'react';
import Navbar from "../components/Navbar";
import ServiceHeader from "../components/Services/ServiceHeader";
import Services from "../components/Home/Services";
import Posts from "../components/Services/Posts";
import Footer from "../components/Footer";

const ServicePage = (props) => {
   return (
      <>
         <Navbar history={props.history}/>
         <ServiceHeader className="mb-100" image="bg-services.png" text="Услуги"/>
         <Services/>
         <Posts/>
         <Footer/>
      </>
   );
};

export default ServicePage;