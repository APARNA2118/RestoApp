import React, { useState } from 'react'
import './Navbar.css'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

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
                <li onClick={()=>{setMenu('home')}}>HOME{menu==='home'?<h/>:<></>}</li>
                <li onClick={()=>{setMenu('menu')}}>MENU{menu==='menu'?<h/>:<></>}</li>
                <li onClick={()=>{setMenu('login')}}>LOGIN{menu==='login'?<h/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt=''/>
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    )
}
export default Navbar