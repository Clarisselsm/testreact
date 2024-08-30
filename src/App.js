import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigationbar from './NavigationBar';
import React,{useState, useEffect} from "react";
import{Routes, Route, Outlet, Navigate} from "react-router-dom";
import Errors from './Errors';
import Admin from './Admin';
import Product from './Product';
import {UserContext} from './TimeInfoContext';
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import Movies from './Movies';


const ProtectedRoute =({user,redirectPath = '/'}) =>{
  if(!user){
    return <Navigate to={redirectPath} replace/>
  }
  return <Outlet/>
}

function App() {

  const[date, setDate] = useState(new Date());
  const[userInfo, setUserInfo] = React.useState('');
  const userData = JSON.parse(sessionStorage.getItem('userName'));
 
  const tick = () => setDate(new Date());

  React.useEffect(()=>{
    if(!userData){
      const timerID = setInterval(()=> tick(), 1000);
      return function cleanup(){
        clearInterval(timerID);
      };
    } else {
         setUserInfo(userData.name)
    }},[]);

//test data
const data = [
  {name:"John", age:30, gender:"Male"},
  {name:"Mary", age:20, gender:"Female"},
  {name:"Crystal", age:19, gender:"Female"}
]



const prodData =[{
  img:"http://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
  name:"Cyxus",
  desc:"Non-Slip Fitness Leisure Running Sneakers",
  price:"$29"
},
{
  img:"http://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747",
  name:"Vitike",
  desc:"Latest Men Sneakers - Black",
  price:"$100"
},
{
  img:"http://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437",
  name:"Aomei",
  desc:"Men's Trend Casual Sports Shoe",
  price:"$40"
},

]

const newProdData = [
  {
    img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    name:"Fjallraven - Foldsack No.1 Backpack",
    desc:"Your perfect pack for everyday use and walks in the forest.",
    price:"$109.95"
},
{
  img:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  name:"Mens Casual Premium Slim Fit T-Shirts",
  desc:"Slim-fitting style, contract raglan long sleeve, three-button henley placket.",
  price:"$22.35"
},
{
  img:"https://tinyurl.com/yhn58smv",
  name:"Mans Cotton Jacket",
  desc:"Great outerwear jackets for Spring/Autumn/Winter.",
  price:"$55.99"
}
]

  return (
    <div>
      <UserContext.Provider value={userInfo? "Welcome, " + userInfo:"The Time Now is: " + date.toLocaleTimeString()}>
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/about/:yourname' element={<About/>}/>
        <Route path='/contact' element={<Contact customer={data}/>}/>
        <Route path='/product' element={<Product prodData={prodData} newProdData={newProdData}/>}/>
        <Route path='/error' element={<Errors/>}/>
        <Route path='/registration' element={<RegistrationForm/>}/>
        <Route path='/login' element={<Login/>}/>
       
        <Route element={<ProtectedRoute user={JSON.stringify(userInfo)}/>}>
            <Route path='/admin' element={<Admin/>}/>
        </Route>

      </Routes>
      </UserContext.Provider>

    
    </div>
  );
}

export default App;
