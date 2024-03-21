import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';
const  Nav = () => {
  return (
    <div>
    <AppBar>
    <Toolbar>
            <Typography sx={{flexGrow:1}} align='left' variant='h5' style={{ color: 'white', fontSize: '24px', fontFamily: 'monospace' }} >
               Restaurant
               <img src={logo}/>
               <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/'>Login</Link>
                </Button>
            </Typography>
        </Toolbar>
     </AppBar>
    </div>
  );
};
export default Nav;

