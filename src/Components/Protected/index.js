import { Outlet,Navigate } from "react-router-dom"

const Protected = () =>{

    const auth = localStorage.getItem("logedIn")

    return(
        auth ? <Outlet/> : <Navigate to={"/login"}/>

    )
}


export default Protected

