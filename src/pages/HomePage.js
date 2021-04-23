import React from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Home/Jumbotron";
import Services from "../components/Home/Services";
import Benefits from "../components/Home/Benefits";
import Cases from "../components/Home/Cases";
import Clients from "../components/Home/Clients";
import Footer from "../components/Footer";
import SubHome from "../components/Home/SubHome";

const HomePage = (props) => {
   console.log(props)
   return (
      <div className="overflow-hidden">
         <Navbar history={props.history} />
         <Jumbotron />
          <SubHome/>
          <Services />
          <Benefits />
          <Cases />
          <Clients />

         <Footer />
      </div>
   );
};

export default HomePage;