import logo from './logo.svg';
import './App.css';
import react from 'react'
import FinalScore from './component/Finalscore';
import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Home from './component/Home'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="App">
     <FinalScore/>
     <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  );
}

export default App;
