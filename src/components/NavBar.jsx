import React from 'react'
import './NavBar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function NavBar() {
  return (

    <>
    <div class="navbar">
        
            <AnchorLink href="#contacts"><button class="navbtn">Contacts</button></AnchorLink>
            <AnchorLink href="#about"> <button class="navbtn">About Me</button></AnchorLink>
            <AnchorLink href="#projects"> <button class="navbtn">Projects</button></AnchorLink>
            <AnchorLink href="#home"> <button class="navbtn">Home</button></AnchorLink>
  
    </div>

        
        
        </>
        
    
  )
}
