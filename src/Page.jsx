import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

import Icons from './components/Icons'


export default function Page() {
  return (
<>
    <header><NavBar/></header>
    <body>
    <div>       
        
        <Home/>
        <Projects/>
        <About/>
        <Contacts/>
        <Icons/>
        
        
    </div>
    </body>
    </>
  )
}
