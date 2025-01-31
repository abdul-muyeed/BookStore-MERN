/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const PrivateRoute = ({children}) => {
    const {currentUser, isLoading} = useAuth()
    if(isLoading) return <h1>Loading...</h1>
    if(currentUser){
        return children;
    }else{
        return <Navigate to="/login"  replace/>
    }
}
export default PrivateRoute