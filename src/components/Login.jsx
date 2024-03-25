import { TextField, Typography, Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>

        <br /><br /><br /><br /> <br /><br /><br />
        <Typography variant='h3' style={{color:"green",fontFamily:'serif',fontSize:'50px',fontWeight:'bold'}}>Login to your Account</Typography>
        <br /><br /><br />
        <TextField variant= "outlined" label='Username'></TextField>
        <br /><br />
        <TextField variant='outlined' label='Password'></TextField>
        <br /><br /><br />
        
        <Button variant='outlined'>LOG IN</Button>
        
        <br/>
    </div>
  )
}

export default Login