import React from 'react'
import './CSS/Loginsignup.css'

const Loginsign = () => {

    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) =>{
        console.log({...formData,[e.target.name]:e.target.value})
    }


    const login = async () =>{
        console.log("Login function executed",formData);

    }
    const signup = async () =>{
        console.log("Sign up function executed",formData);
        
    }

  return (
    <div classname="loginsignup">
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
                {state==="Sign up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
                <input  name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email address'/>
                <input  name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>


            </div>
            <Button onClick={()=>{state==='Login'?login():signup()}}>
                Continue
            </Button>
            {state==="Sign Up"
            ?<p classname='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
            : <p classname='loginsignup-login'>Create  an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
            <div className='loginsignup-agree'>
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
      
    </div>
    </div>
   
  )
}
export default  Loginsign
