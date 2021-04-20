import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";

function App() {
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={HomePage}/>
               <Route path="/services" exact component={ServicePage}/>
            </Switch>

         </BrowserRouter>

      </>
   );
}

export default App;
