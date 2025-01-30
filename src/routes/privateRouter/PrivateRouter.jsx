import React, { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user} = useContext(authContext)

    if(!user){
        return <Navigate to ='/login'></Navigate>
    }
    return children
};

export default PrivateRouter;