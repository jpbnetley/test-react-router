
import 'lib/styles.css';
import './App.css';
import { Outlet } from "react-router";
import { MainLayout } from 'lib';
import { TopNav } from '../components/top-nav';

function App() {

  return (
    <MainLayout topNav={<TopNav />}>
      <Outlet />
    </MainLayout>
  )
}

export default App
