import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import ProctectedRoute from "./components/ProctectedRoute"
import DashboardPage from "./pages/DashboardPage"
import Layout from "./components/Layout"
import TasksPage from "./pages/TasksPage"
import TimelinePage from "./pages/TimelinePage"
import ProfilePage from "./pages/ProfilePage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LoginPage/>}/>

          <Route element={<ProctectedRoute/>}>
          <Route element={<Layout />}>
            <Route path='/dashboard' element={<DashboardPage/>}  />
            <Route path='/tasks' element={<TasksPage/>}  />
            <Route path='/timeline' element={<TimelinePage/>}  />
            <Route path='/profile' element={<ProfilePage/>}  />


          </Route>
          </Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
