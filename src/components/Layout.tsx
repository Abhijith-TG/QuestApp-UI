import DashboardPage from '../pages/DashboardPage'
import Sidebar from './Sidebar'


function Layout({children}:any) {
  return (
    <div>
        <div className='flex gap-5' >
        <Sidebar/>
        <div className='flex-1 z-40'>
        {children}
        </div>
        </div>
    </div>
  )
}

export default Layout