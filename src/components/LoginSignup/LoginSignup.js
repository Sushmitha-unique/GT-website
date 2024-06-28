import React,{useState} from "react";
import "./LoginSignup.css"
import axios from "axios";
const LoginSignup = () =>{
    const [state,setstate] = useState("Login")
    const [formdata,setformdata] = useState ({
        name:"",
        password:"",
        email:""
    })
    const changeHandler = (e) =>{
    setformdata({...formdata,[e.target.name]:e.target.value })
    }
     const login = async () =>{
      console.log("login executed",formdata)
      try{
        const response = await axios.post("http://localhost:3000",{
            "email":formdata.email,
            "password":formdata.password
        })
        console.log(response.data)
        if(response.data.success)
            {
                localStorage.setItem('auth-token',response.data.token)
                window.location.replace("/")
            }
            else{
               alert(response.data.error)
            }
       }

       catch(err){
        console.log("error message"+err)
       }
     }
     const signup = async () =>{
        console.log("signup executed",formdata)
       try{
        const response = await axios.post("http://localhost:3000",{
            "name":formdata.name,
            "email":formdata.email,
            "password":formdata.password
        })
        console.log(response.data)
        if(response.data.success)
            {
                localStorage.setItem('auth-token',response.data.token)
                window.location.replace("/")
            }
            else{
               alert(response.data.error)
            }
       }

       catch(err){
        console.log("error message"+err)
       }
     }
    return (
        <div className="loginsignup"> 
        <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-feilds">
        {state==="Signup"?<input type="text" name="name" value={formdata.name} onChange={changeHandler} placeholder="Your Name" required />:<></>} 
         <input type="email"  name="email" value={formdata.email} onChange={changeHandler} placeholder="Your email" required/>
         <input type="password"  name="password" value={formdata.password} onChange={changeHandler} placeholder="Your password" required/>
        </div>
        <div className="loginsignup-agree">
            <input type="checkbox" name="" id=""/>
            <p>By continuing , i agree to the terms of use & privacy policy</p>
         </div>
        <button onClick={()=>{state ==="Login"?login():signup()}}>Continue</button>
        {state==="Signup"?<p className="loginsignup-login">Already have an account ? <span onClick={()=>{setstate("Login")}}>Login here</span></p>:  
          <p className="loginsignup-login">create an account? <span onClick={()=>{setstate("Signup")}} >click here</span></p>}
        
    
        
        </div>
        </div>
    )
}

export default LoginSignup;