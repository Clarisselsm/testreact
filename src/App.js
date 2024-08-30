import logo from './logo.svg';
import Header from './Components/Header';
import Drink from './Components/Drink';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Search from './Components/Search';

// import {Routes, Route} from  "react-router-dom";

function App() {
  return (
    <div >
      
      <Header/>    
        <main className="main">
          <Hero/>
          <Drink/>
          <Search/>
        </main>      
      <Footer/>

      

      {/* <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/services' element ={<Services/>}/>
        <Route path='/portfolio' element ={<Portfolio/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/team' element ={<Team/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes> */}

      
    </div>
  );
}

export default App;
