import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Home/Jumbotron";
import Services from "./components/Home/Services";
import Benefits from "./components/Home/Benefits";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Jumbotron />
      <Services />
      <Benefits />
    </div>
  );
}

export default App;
