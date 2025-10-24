
import { Outlet } from 'react-router-dom'
import './App.css'
import { MainLayout } from '../components/layout/main'
import { TopNav } from '../components/top-nav'

function App() {

  return (
    <MainLayout topNav={<TopNav />}>
      <Outlet />
    </MainLayout>
  )
}

export default App
