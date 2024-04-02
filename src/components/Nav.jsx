import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar'>
        <AppBar> 
        <Toolbar>
            <Typography sx={{flexGrow:1}} align='left' variant='h5' style={{ color: '#fff', fontSize: '24px', fontFamily: 'monospace' }} >
               TEA TALKS
               <img style={{width:100}}
                  src="assets/Tt.png"
                  alt=""
                  title=""
                />
            </Typography> 
           
                  <Button style={{color:'white' }}>
                     <Link to='/' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Home</Link>
                  </Button>
                  <Button style={{color:'white'}}>
                     <Link to='/l' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Login</Link>
                  </Button>
                  <Button style={{color:'white'}}>
                     <Link to='/s' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Signup</Link>
                  </Button>

                  <Button style={{color:'white'}}>
                     <Link to='/as' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>ViewUser</Link>
                  </Button>

                  <Button style={{color:'white'}}>
                     <Link to='/d' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Dashboard</Link>
                  </Button>
                  <Button style={{color:'white'}}>
                     <Link to='/f' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Feedback</Link>
                  </Button>
                  {/* <Button style={{color:'white'}}>
                     <Link to='/c' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Checkout</Link>
                  </Button> */}
                  <Button style={{color:'white'}}>
                     <Link to='/o' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Order</Link>
                  </Button>
                  <Button style={{color:'white'}}>
                     <Link to='/menu' style={{fontSize:'18px', color: '#161010', fontFamily: '"Fira Sans sans-serif', fontWeight: 'bold'}}>Menu</Link>
                  </Button>
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Nav