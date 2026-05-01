import Header from './Header'
import Sidebar from './Sidebar'


function Layout({children}:any) {
  return (
    <div>
        <Header></Header>
        <div className='flex' >
        <Sidebar/>
        {children}
        </div>
    </div>
  )
}

export default Layout