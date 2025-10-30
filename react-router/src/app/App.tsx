
import { Outlet } from 'react-router-dom'
import './App.css'
import { TopNav } from '../components/top-nav'
import { MainLayout } from 'lib'
import 'lib/styles.css';

function App() {

  return (
    <MainLayout topNav={<TopNav />}>
      <Outlet />
    </MainLayout>
  )
}

export default App
