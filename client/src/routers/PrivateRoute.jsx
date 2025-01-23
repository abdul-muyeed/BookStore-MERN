/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth()
    if(currentUser){
        return children;
    }else{
        return <Navigate to="/login"  replace/>
    }
}
export default PrivateRoute