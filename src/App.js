import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Contact from './Components/Contact';
import About from './Components/About';
import Clients from './Components/Clients';
import Home from './Components/Home';
import {Routes, Route} from  "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      {/* <Services/>
      <Portfolio/>
      <About/>
      <Team/>
      <Clients/>
      <Contact/> */}
      

      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/services' element ={<Services/>}/>
        <Route path='/portfolio' element ={<Portfolio/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/team' element ={<Team/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
