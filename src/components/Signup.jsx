import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Signup = (props) => {
  // var [data,setData] = useState();
  // const inputHandler = (e) => {
  //     console.log("on");
  //     setData({...data,[e.target.name]:e.target.value});
  //     console.log(data);
  // }

  var [data, setData] = useState({
    // id: props.data.id,
    name: props.data.name,
    email: props.data.email,
    phone: props.data.phone,
    pswd: props.data.pswd

});
const inputHandler = (e) => {
    console.log("on");
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
}


const submit = () => {
    //if(props.method === 'post') {
    axios
        .post("http://localhost:3000/logins", {
            user_name: data.name,
            user_email: data.email,
            user_phone: data.phone,
            user_pswd: data.pswd
        })
        .then(() => {
            alert("New entry created successfully");
        })
        .catch(() => {
            alert("Error saving data");
        })
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
        <TextField required id="outlined-required" name='name' value={data.name}  label="Name"   onChange={inputHandler}/>
        <TextField required id="outlined-required" name='email' value={data.email}  label="Email"   onChange={inputHandler}/>
      </div>
      <div>
        <TextField required id="outlined-required" name='phone' value={data.phone}  label="PhoneNumber"   onChange={inputHandler}/>
        <TextField required id="outlined-required" name='pswd' value={data.pswd}  label="Password"   onChange={inputHandler}/>
      </div>
      {/* <TextField fullWidth label="Address" id="address" onChange={inputHandler}/>
      <TextField required id="outlined-required"   label="Pincode"   onChange={inputHandler}/> */}

     
      </Box>
      <br /><br />
      <Button variant='outlined' onClick={submit} color='inherit' style={{color:'blue'}} >SignUp</Button>
      <br /><br />
  </div>
)
}

export default Signup