import { createContext, useContext, useEffect, useState } from "react";


type User={
    id:string,
    email:string
}

type AuthContextType = {
    user:User | null;
    login:(userData: User) => void;
    logout:() => void;
    loading:boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}:any)=>{
    const [user, setUser] = useState<User | null>(null)

    const [loading, setLoading] = useState(true);

useEffect(() => {
  const stored = localStorage.getItem("user");
  if (stored) {
    setUser(JSON.parse(stored));
  }
  setLoading(false);
}, []);



    useEffect(()=>{
      const stored = localStorage.getItem("user")

      if(stored){
        setUser(JSON.parse(stored));
      }

    },[])


    const login = (userData: User)=>{
        localStorage.setItem("user",JSON.stringify(userData))
        setUser(userData)
    }

    const logout =()=>{
        localStorage.removeItem("user")
        setUser(null)
    }

    

      return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () =>{
  const context = useContext(AuthContext);
  if(!context) throw new Error("Error in context")
    return context;
}