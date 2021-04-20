import React from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Home/Jumbotron";
import Services from "../components/Home/Services";
import Benefits from "../components/Home/Benefits";

const HomePage = (props) => {
   console.log(props)
   return (
      <>
         <Navbar history={props.history} />
         <Jumbotron />
         <Services />
         <Benefits />
      </>
   );
};

export default HomePage;