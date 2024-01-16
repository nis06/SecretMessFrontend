import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedin, children}) => {

   
    if(isLoggedin){
        return children;
    }
    else{
            return <Navigate to="/"/>
    }
}

export default PrivateRoute