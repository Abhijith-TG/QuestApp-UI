import { useEffect, useState } from "react"
import { BiChevronLeft, BiChevronRight, BiClipboard, BiUser } from "react-icons/bi"
import { BsActivity } from "react-icons/bs"
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from '../contexts/authContext'


function Sidebar() {

  const navigate = useNavigate()
  const [route,setRoute] = useState('')
  const [expand, setExpand] = useState(false)
  const {logout} = useAuth()
  const navItems = [
    {name:'Dashboard',nav:'/dashboard',icon:<LuLayoutDashboard size={20} />},
    {name:'Profile',nav:'/profile',icon:<BiUser size={20}/>},
    {name:'Quests',nav:'/quests',icon:<BiClipboard size={20}/>},
    {name:'Timeline',nav:'/timeline',icon:<BsActivity size={20}/>},

  ]
  const location = useLocation()

  useEffect(()=>{
    setRoute(location.pathname)
  },[location.pathname])


  

  return (
    <nav className={`h-screen bg-white ${expand ? "w-20": "w-64 absolute md:relative z-50"} flex flex-col justify-between transition-all shadow-[2px_0_10px_rgba(0,0,0,0.15)] py-10 px-3 `}>
      <div>


      <div className="flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <img src={`https://ui-avatars.com/api/?name=John+Doe&background=random`} className="h-9 w-9 shrink-0 rounded-full bg-primary" />
          
          {
            !expand &&
          <p className="text-lg font-semibold shrink-0" >
            John Doe
          </p>
          }
        </div>
        {
          !expand ?
          <BiChevronLeft onClick={()=>setExpand(!expand)} size={25} className="text-gray-400 shrink-0"/>
          :
          <BiChevronRight onClick={()=>setExpand(!expand)} size={25} className="text-gray-400 shrink-0"/>

        }
      </div>
      <div className="mt-10">
          {
          navItems.map((item,index)=>
            <div className={ ` ${expand ?" justify-center px-1":" justify-between px-3"} flex   py-2 mt-2 hover:cursor-pointer hover:bg-gray-200 hover:text-black  rounded-full ${route===item.nav ?"bg-gray-200 text-black font-medium  ":"text-gray-700"}`} key={index} onClick={()=>navigate(item.nav)}>
                {
                  !expand &&
                <p>
                  {item.name}
                </p>
                }
                <div className="">
                  {item.icon}
                </div>
            </div>
          
          )
          
          }
      </div>
      </div>
       <div className={ ` font-medium items-center ${expand ?" justify-center px-1":" justify-between px-3"} flex   py-2 mt-2 hover:cursor-pointer hover:bg-red-200 hover:font-medium text-red-800  rounded-full `} onClick={()=>logout()} >
          {
            !expand &&
            <p>
            Logout
            </p>
          }
          <LuLogOut/>
        </div>
    </nav>
  )
}

export default Sidebar