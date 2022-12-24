import { useState } from "react";
import {NavLink, useNavigate,Navigate } from "react-router-dom";

const Login = () =>{

    const history = useNavigate();
    const isLogin = localStorage.getItem("logedIn");

    const [userDetails,setUserDetails] = useState({
        email : "",
        password : "",
    });
    
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

        const {email,password} = userDetails
        if(email === ""){
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
            const getUserArray = JSON.parse(localStorage.getItem("userData"))
            if(email === getUserArray.email && password === getUserArray.password){
                localStorage.setItem("logedIn",true)
                history("/")
            }
            else{
                alert("Invalid Email or Password")
            }
        }
    
    }

    if(isLogin){
            return <Navigate to="/game"/>
    }
    

    return (
        <div className="text-center d-flex justify-content-center align-items-center m-4 ">
            <div className="bg-dark col-lg-6">
            <i className="fa fa-user text-warning" style={{fontSize:200}}/>
                <h1 className="text-white">Login</h1>
                <form className="m-3" onSubmit={handleSubmit}>
                    <input type='email' className="form-control" placeholder="Email" value={userDetails.email} onChange = {readEmail} />
                   
                    <br/>
                    <input type='password' className="form-control" placeholder="Password" value={userDetails.password} onChange = {readPassword}/><br/>
                   
                    <input type='submit' value = 'submit' className="btn btn-warning"/>
                    <br/>
                    <br/>
                    <span className="text-white">Don't Have an Account?<NavLink to="/registration"><button className="btn btn-warning">Register</button></NavLink></span> 
                    
                    
                </form>
            </div>
        </div>
    )
}


export default Login


