import { Box, Button, TextField, Typography } from '@mui/material';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const Checkout = () => {
  var [data,setData] = React.useState();
  const inputHandler = (e) => {
      console.log("on");
      setData({...data,[e.target.name]:e.target.value});
      console.log(data);
  }
  
return (
  <div className='checkout'>
    <br /><br /><br />
      
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant='h10' style={{color: 'purple',fontFamily: 'serif',fontSize: '38px',fontWeight: 'bold',}} >Customer Info</Typography>
      <div>
        <TextField required id="outlined-required"   label="First Name"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Last Name"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Email"   onChange={inputHandler}/>
      </div>
      <div>
      <TextField fullWidth label="Address" required id="outlined-required" onChange={inputHandler}/>
      <TextField fullWidth label="Street Name" id="address" onChange={inputHandler}/>
      <TextField fullWidth label="Town/City" id="address" onChange={inputHandler}/>
      </div>
      <div>
        
        <TextField required id="outlined-required"   label="Country"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Pincode"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="PhoneNumber"   onChange={inputHandler}/>
      </div>



      <br />
      <Typography variant='h8' style={{color: 'purple',fontFamily: 'serif',fontSize: '38px',fontWeight: 'bold',}} >Payment Info</Typography>
      <div>
        
        <TextField required id="outlined-required"   label="Credit Card Number"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Billing Zip"   onChange={inputHandler}/>
        
      </div>
      <div>
        <TextField required id="outlined-required"   label="Month"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Year"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="CVV"   onChange={inputHandler}/>
      </div>
      


      <br />
      <Typography variant='h8' style={{color: 'purple',fontFamily: 'serif',fontSize: '38px',fontWeight: 'bold',}} >Billing Address</Typography>
      <br />
      <FormControlLabel
          style={{color:'purple'}}
          value="end"
          control={<Checkbox />}
          label="Billing Address same as Shipping"
          labelPlacement="end"
        />
      <div>
        
        <TextField required id="outlined-required"   label="Billing Name"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Select Country"   onChange={inputHandler}/>
        
      </div>
      <div>
        <TextField required id="outlined-required"   label="Address"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="City"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Country"   onChange={inputHandler}/>
        <TextField required id="outlined-required"   label="Zip"   onChange={inputHandler}/>
      </div>
      
      </Box>
      <br />
      
      <Button variant='contained' color='secondary' style={{color:'white'}} >Complete Checkout and Pay</Button>
  </div>
)
}

export default Checkout