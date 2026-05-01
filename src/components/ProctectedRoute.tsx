import { useAuth } from '../contexts/authContext'
import { Navigate, Outlet } from 'react-router-dom';

function ProctectedRoute() {
    const {user, loading} = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }

    if(!user)
        return <Navigate to={'/'} replace/> 



  return <Outlet/>

}

export default ProctectedRoute