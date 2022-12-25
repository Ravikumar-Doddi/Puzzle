import { useNavigate ,NavLink} from "react-router-dom"
import { useState } from "react";

import './index.css'
const Home = () =>{

    const [userDetails,setUserDetails] = useState({
        phone : "",
        image : "",
        dob : "",
        adress : "",
    });

    const history = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem("logedIn")
        history("/login")
    }

    const readAdress = (e) =>{
        setUserDetails(prev =>{
         return {...prev,adress : e.target.value}
        })
     }
     const readImg = (e) =>{
       const imgFile = e.target.files[0]
       setUserDetails(prev =>{
        return {...prev,image : imgFile}
       })
       if(!imgFile.name.match(/\.(jpg|jpeg|png|gif)$/)){
        alert("Invalid Image")
       }
     }

     const readPhone = (e) =>{
        setUserDetails(prev =>{
         return {...prev,phone : e.target.value}
        })
     }
     const readDob = (e) =>{
        setUserDetails(prev =>{
         return {...prev,dob : e.target.value}
        })
     }

     const handleSubmit = (e) =>{
        e.preventDefault();
        const {phone,dob,image,adress} = userDetails
        console.log(dob)

        if(image === ""){
            alert("Image is Required")
        }
        else if(!image.name.match(/\.(jpg|jpeg|png|gif)$/)){
            alert("Invalid Image")
        }else if(dob === ""){
            alert("DOB is Required")
        }
        else if (adress === ""){
            alert("Adress is Required")
        }
        else if(phone === null){
            alert("Mobile Number is Required")
        }
        else if(phone.length<9){
            alert("Please Enter a valid Mobile Number")
        }else{
            history("/game") 
        }
        
    }

    const userName = JSON.parse(localStorage.getItem("userData"))
    return(
        <>
        <div className="text-center d-flex justify-content-center align-items-center m-4 ">
            <div className="bg-dark col-lg-6">
            <i className="fa fa-user text-warning" style={{fontSize:200}}/>
                <h1 className="text-white">User Details</h1>
                <form className="m-3" onSubmit={handleSubmit}>
                <input type='file' className="form-control" onChange = {readImg}/><br/>
                <input type = "date" className="form-control" value={userDetails.dob} onChange = {readDob}/><br/>

                    <input type="text" className="form-control" placeholder="Adress" value={userDetails.adress} onChange = {readAdress} />
                   
                    <br/>
                    <input type="number" className="form-control" placeholder="Mobile" value={userDetails.phone} onChange = {readPhone}/><br/>
                   
                    
                    <input type='submit' value = 'submit' className="btn btn-warning mb-3"/><br/>
                    <NavLink to="/game"><button className="btn btn-info">Skip for this time</button></NavLink>
                    <br/>    
                    
                    
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Home

