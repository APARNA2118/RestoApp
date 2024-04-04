
import { TextField, Typography, Button, Box } from '@mui/material'
import React, { useState } from 'react'
const Login = () => {

  const [state,setState] = useState("Login");
  return (
    <div>

        <br /><br /><br /><br /> <br /><br /><br />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Typography variant='h3' style={{color:"green",fontFamily:'serif',fontSize:'50px',fontWeight:'bold'}}>Login to your Account</Typography>
        <br /><br /><br />
        <TextField variant= "outlined" label='Username'></TextField>
        <br /><br />
        <TextField variant='outlined' label='Password'></TextField>
        <br /><br /><br />
        
        <Button variant='outlined'>LOG IN</Button>
        
        <br/> <br /><br /><br />
        </Box> 
    </div>
  )
}

export default Login