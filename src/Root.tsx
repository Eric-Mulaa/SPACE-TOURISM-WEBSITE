import './Root.css'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineStars } from "react-icons/md";
import { HomeContext } from './Context';


export default function Root() {
  const navigate = useNavigate()
   function handleHomeClick(){
    navigate('/destination')
}

  return (
    <HomeContext.Provider value={{handleHomeClick}}>
    <div className='root-container'>
      <div className='navbar'>
        <div className='icon'>
        <div className='navbar-icon'> <MdOutlineStars /> </div>
        </div>
        <div className='empty-div'></div>
        <div className='links'>
          <NavLink className='link' to='/'>00 HOME</NavLink>
          <NavLink className='link' to='/destination'>01 DESTINATION</NavLink>
          <NavLink className='link' to='/crew'>02 CREW</NavLink>
          <NavLink className='link' to='/technology'>03 TECHNOLOGY</NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
    </HomeContext.Provider>
    
  )
}

