import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import CasesPage from "./pages/CasesPage";
import CompanyPage from "./pages/CompanyPage";
import SmmPage from "./pages/SmmPage";

function App() {
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={HomePage}/>
               <Route path="/services" exact component={ServicePage}/>
               <Route path="/cases" exact component={CasesPage}/>
               <Route path="/about" exact component={CompanyPage}/>
               <Route path="/smm" exact component={SmmPage}/>
            </Switch>

         </BrowserRouter>

      </>
   );
}

export default App;
