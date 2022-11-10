import React from 'react'
import Banar from './banar'
import Topnav from './topnav'
import Registration from './form'


function Layout() {
  return (<>  
      <div className="">
      <Topnav/>
      <Banar/>
      <Registration/>
      </div>
  
    
    </>
    
  )
}

export default Layout