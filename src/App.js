import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import CasesPage from "./pages/CasesPage";
import CompanyPage from "./pages/CompanyPage";
import SmmPage from "./pages/SmmPage";
import MarcetingPage from "./pages/MarcetingPage";
import BlogPage from "./pages/BlogPage";
import BlogPView from "./pages/BlogView";
import LogoPage from "./pages/LogoPage";

function App() {
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={HomePage}/>
               <Route path="/services" exact component={ServicePage}/>
               <Route path="/blog" exact component={BlogPage}/>
               <Route path="/blog/1" exact component={BlogPView}/>
               <Route path="/cases" exact component={CasesPage}/>
               <Route path="/about" exact component={CompanyPage}/>
               <Route path="/smm" exact component={SmmPage}/>
               <Route path="/marceting" exact component={MarcetingPage}/>
               <Route path="/logo-page" exact component={LogoPage}/>
            </Switch>

         </BrowserRouter>

      </>
   );
}

export default App;
