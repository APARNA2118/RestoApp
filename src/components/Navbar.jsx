import React, { useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
//import cart_icon from '../assets/cart_icon.png'

const Navbar =()=>{
    const [menu,setMenu] = useState('home');
    return(
        <div className="navbarr">
            <div className="nav-logoo">
                <img src={logo} alt=''/>
                <p>
                  TEATALKS  
                </p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu('home')}}><a href="/">HOME</a>{menu==='home'?<h/>:<></>}</li>
                <li onClick={()=>{setMenu('menu')}}><a href="/menu">MENU</a>{menu==='menu'?<h/>:<></>}</li>
                <li onClick={()=>{setMenu('menu')}}><a href="/d">USER</a>{menu==='dashboard'?<h/>:<></>}</li>
                <li onClick={()=>{setMenu('login')}}><a href="http://localhost:5173/">ADMIN</a>{menu==='login'?<h/>:<></>}</li>
                <li onClick={()=>{setMenu('menu')}}><a href="/f">FEEDBACK</a>{menu==='feedback'?<h/>:<></>}</li>
                
            </ul>
            <div className="nav-login-cart">
                <button>
                    <a href='/ls'>
                    Login
                    </a>
                    </button>
                    <button>
                    <a href='/'>
                    Logout
                    </a>
                    </button>

            </div>
        </div>
    )
}
export default Navbar