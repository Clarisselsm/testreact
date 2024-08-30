import React from 'react'
import {Nav, Navbar, NavLink} from 'react-bootstrap'
import{useLocation,useNavigate} from 'react-router-dom'
import TimeInfo from './TimeInfo'


const NavigationBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const clearStorage = (e) =>{
        e.preventDefault();

        sessionStorage.clear("userName");
        alert('Session storage has been cleared')
        navigate('/')
    }

  return (
    <div>
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav style={{width:"100%"}} activeKey={location.pathname}>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/movies">Movies</NavLink>
                    <NavLink href="/about/defaultname">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <NavLink href="/product">Product</NavLink>
                    <NavLink href="/admin">Admin</NavLink>
                    <NavLink href="/registration">Registration</NavLink>
                    <NavLink href="/login">Login</NavLink>
                    <NavLink href="/logout" onClick={clearStorage} className="btn btn-dark">Logout</NavLink>
                    <NavLink className='ms-auto'><TimeInfo/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      
    </div>
  )
}

export default NavigationBar
