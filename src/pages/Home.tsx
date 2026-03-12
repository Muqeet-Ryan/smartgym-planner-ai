import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"

const Home = () => {
  const {user,isLoading} = useAuth();

  if(user && !isLoading){
    return <Navigate to="/profile" replace />
  }
  return (
    <div>
      
    </div>
  )
}

export default Home