import { useState } from 'react'
import type { LoginData } from '../types/userTypes'
import { LoginAccount, RegisterAccount } from '../services/LoginSignup'
import { useAuth } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import logo from '..//../public/logoApp.png'
import sideimage from '..//../public/sideimage.jpg'
import toast from 'react-hot-toast'

type Method="SIGNIN"|"SIGNUP"

function AuthForm() {

    const {login} = useAuth();
    const navigate = useNavigate()


    const [method, setMethod] = useState<Method>("SIGNIN")
    const [loading, setLoading] = useState(false)

    const [user,setUser] = useState<LoginData>({email:"",password:""})

    const loginUser = async ()=>{
        try {
          let response = await LoginAccount(user?.email|| '',user?.password || '')
          setLoading(true)
          if(response.success === true){
            login(response.data)
            toast.success("Login successfull !")
            setLoading(false)
            navigate('/dashboard')
            return;
          }
          toast.error(response.message || "Login failed")
          throw new Error (response.message || "Login failed");
        } catch (error:any) {
          setLoading(false)
          console.log("error",error.message)
        }
        finally{
          setLoading(false)
        }
    }

    const registerUser = async ()=>{
        try {
          let response = await RegisterAccount(user.username || '',user?.password|| '',user?.email || '')
          console.log("response",response)
          if(response.success === true){
            login(response.data)
            toast.success("Registration Successful !")
            navigate('/dashboard')
            return;
          }
          toast.error(response.message || "Registration failed")
          throw new Error (response.message || "Registration failed");
        } catch (error:any) {
          console.log("error",error.message)
        }
    }


  return (
    <div className='w-full flex h-screen ' >
    <div className='md:w-1/2 h-full relative'>
    <div className='flex items-center absolute'>
      <img src={logo} alt="logo" className='w-20' />
      <p className='text-2xl font-medium'>QuestApp</p>
    </div>

    <div className="flex bg-secondary/20 p-1 rounded absolute w-[360px] right-50 top-40">
  <button
    onClick={() => setMethod("SIGNIN")}
    className={`flex-1 py-1 rounded ${
      method === "SIGNIN"
        ? "bg-secondary text-white"
        : "text-secondary"
    }`}
  >
    Sign In
  </button>

  <button
    onClick={() => setMethod("SIGNUP")}
    className={`flex-1 py-1 rounded ${
      method === "SIGNUP"
        ? "bg-secondary text-white"
        : "text-secondary"
    }`}
  >
    Sign Up
  </button>
</div>
    {
      method==="SIGNIN" ?
      
      <div className='h-full'>
          
<div className='flex justify-center flex-col items-center gap-10 h-full'>
  <div className='flex flex-col gap-2'>

        <h1 className='text-4xl text-start '>Welcome Back !</h1>
        <p>Sign in and access your Quest system and level up!</p>
  </div>
  <div className='flex justify-center flex-col items-center gap-3'>
        {/* <h1 className='text-4xl'>Sign In</h1> */}
      <input className=" w-[350px] px-1 py-2 rounded-lg border" placeholder="Email" onChange={(e:any)=>setUser(prev=>({...prev, email:e.target.value}))} value={user?.email ||''} type="text"/>
      <input className=" w-[350px] px-1 py-2 rounded-lg border " placeholder="Password" onChange={(e:any)=>setUser(prev=>({...prev, password:e.target.value}))} value={user?.password||''} type="password"/>
      <button className='w-[350px] bg-primary px-6 py-2 rounded-lg text-white hover:bg-primary/80 hover:cursor-pointer' onClick={()=>loginUser()} disabled={loading}>Sign In</button>
  </div>
      </div>
      </div>

      :
        <div className='h-full'>
          
<div className='flex justify-center flex-col items-center gap-10 h-full'>
  <div className='flex flex-col gap-2'>

        <h1 className='text-4xl text-start mt-10'>Regsiter Here !</h1>
        <p>Sign up and access your Quest system and level up!</p>
  </div>
  <div className='flex justify-center flex-col items-center gap-3'>
        {/* <h1 className='text-4xl'>Sign In</h1> */}
      <input className=" w-[350px] px-1 py-2 rounded-lg border" placeholder="Username" onChange={(e:any)=>setUser(prev=>({...prev, username:e.target.value}))} value={user?.username ||''} type="text"/>
      <input className=" w-[350px] px-1 py-2 rounded-lg border" placeholder="Email" onChange={(e:any)=>setUser(prev=>({...prev, email:e.target.value}))} value={user?.email ||''} type="text"/>
      <input className=" w-[350px] px-1 py-2 rounded-lg border " placeholder="Password" onChange={(e:any)=>setUser(prev=>({...prev, password:e.target.value}))} value={user?.password||''} type="password"/>
      <button className='w-[350px] bg-primary px-6 py-2 rounded-lg text-white hover:bg-primary/80 hover:cursor-pointer' onClick={()=>registerUser()} disabled={loading}>Sign Up</button>
  </div>
      </div>
      </div>
  
}
</div>
<div className='md:w-1/2 h-full overflow-hidden'>
  <img src={sideimage} alt="side images" />
</div>
    
</div>
  )
}

export default AuthForm