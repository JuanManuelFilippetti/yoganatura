import logo from './logo.svg';
import './App.css';
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import HowWeWork from "./Screens/HowWeWork";
import Services from "./Screens/Services";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Benefits/>
      <Contact/>
      <Home/>
      <HowWeWork/>
      <NavBar/>
      <Services/>
    </div>
  );
}

export default App;
