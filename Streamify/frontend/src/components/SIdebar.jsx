import React from 'react'
import useAuthUser from '../hooks/useAuthUser';
import { useLocation } from 'react-router';

const Sidebar = () => {
   const {authUser}= useAuthUser();
const location= useLocation();
const currentPath= location.pathname;




  return (
   <div>Sidebar</div>
  )
}

export default Sidebar;