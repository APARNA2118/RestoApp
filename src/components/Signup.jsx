import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
  var [data,setData] = useState();
  const inputHandler = (e) => {
      console.log("on");
      setData({...data,[e.target.name]:e.target.value});
      console.log(data);
  }
  
return (
  <div className='signuop'>
    <br /><br /><br /><br /><br /><br /><br />
      <Typography variant='h4' style={{color: 'orange',fontFamily: 'serif',fontSize: '50px',fontWeight: 'bold',}} >Sign Up Here</Typography>
      <br /><br />
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="outlined-required"   label="Name"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Email"   onChange={inputHandler}/>
      </div>
      <div>
        <TextField required id="outlined-required"   label="PhoneNumber"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Password"   onChange={inputHandler}/>
      </div>
      {/* <TextField fullWidth label="Address" id="address" onChange={inputHandler}/>
      <TextField required id="outlined-required"   label="Pincode"   onChange={inputHandler}/> */}

     
      </Box>
      <br /><br />
      <Button variant='outlined' color='inherit' style={{color:'blue'}} >SignUp</Button>
      <br /><br />
  </div>
)
}

export default Signup