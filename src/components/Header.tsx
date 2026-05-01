import { useAuth } from '../contexts/authContext'
import logo from '..//../public/logoApp.png'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function Header() {

    const {logout} = useAuth()
    const [route, setRoute] = useState('')
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(()=>{
      setRoute(location.pathname)
    },[location.pathname])    


    const routes = [
      {name:'Dashboard', nav:'/dashboard'},
      {name:'Tasks', nav:'/tasks'},
      {name:'Timeline', nav:'/timeline'},
      {name:'Profile', nav:'/profile'}

    ]

  return (
    <div className='flex justify-between items-center lg:px-40 md:px-20 px-2 bg-black/40 ' >
      <div className='flex items-center'>
        <img src={logo} alt="logo" className='w-17' />
      <p className='text-2xl font-medium text-white'>QuestApp</p>
      </div>
        <nav className='flex gap-5 font-none font-medium'>
          {
            routes.map((data,index)=>
              <p key={index} className={`hover:cursor-pointer px-3 py-1 rounded text-white hover:text-white ${route === data.nav ? "bg-primary   text-white ":"" }`} onClick={()=>navigate(data.nav)} >{data.name}</p>

            )
          }

        </nav>
        <button onClick={()=>logout()} className='px-2 py-1 rounded text-white bg-primary hover:bg-primary/50 hover:cursor-pointer font-medium' >
            Logout
        </button>
    </div>
  )
}

export default Header