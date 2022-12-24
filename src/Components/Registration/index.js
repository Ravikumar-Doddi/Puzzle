import { useState,useRef } from "react"
import { NavLink ,useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser';

import './index.css'

const Registration = () =>{
    const [userDetails,setUserDetails] = useState({
        name : "",
        email : "",
        password : "",
    });
    const history = useNavigate();
    const form = useRef();
    
    const readUser = (e) =>{
       setUserDetails(prev =>{
        return {...prev,name : e.target.value}
       })
    }

    const readEmail = (e) =>{
        setUserDetails(prev =>{
         return {...prev,email : e.target.value}
        })
     }

     const readPassword = (e) =>{
        setUserDetails(prev =>{
         return {...prev,password : e.target.value}
        })
     }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {name,email,password} = userDetails
        if(name === ""){
            alert("Name field is required");
        }
        else if(email === ""){
            alert("Email is required")
        }
        else if(!email.includes("@gmail")){
            alert("Enter a Valid email Id")
        }
        else if(password === ""){
            alert("Password is requrired")
        }
        else if(password.length<4){
            alert("Password lengeth should be greater than four")
        }else{
            localStorage.setItem("userData",JSON.stringify(userDetails))
            history("/login")

            emailjs.sendForm('service_p7tqp4p', 'template_22a1j0q', form.current, 'KdAR1M0to5qsahEkX')
            .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        }
        
    }

    return(
        <div className="text-center d-flex justify-content-center align-items-center m-4 ">
            <div className="bg-dark col-lg-6">
            <i className="fa fa-user text-warning" style={{fontSize:200}}/>
                <h1 className="text-white">Register</h1>
                <form className="m-3" onSubmit={handleSubmit} ref={form}>
                    <input type='text' className="form-control" placeholder="Username" name="user_name" value={userDetails.name} onChange = {readUser}/>
                    <br/>
                    
                    <input type='email' className="form-control" placeholder="Email" name="user_email" value={userDetails.email} onChange = {readEmail} />
                   
                    <br/>
                    <input type='password' className="form-control" placeholder="Password" value={userDetails.password} onChange = {readPassword}/><br/>
                   

                    <input type='submit' value = 'submit' className="btn btn-warning"/>
                    <br/>
                    <br/>
                    <span className="text-white">Already Have an Account?<NavLink to="/login"><button className="btn btn-warning">Login</button></NavLink></span> 
                    
                </form>
            </div>
        </div>
    )
}

export default Registration




