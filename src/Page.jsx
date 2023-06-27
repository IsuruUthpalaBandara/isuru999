import React from 'react'
import './Page.css'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CodeChallenges from './components/CodeChallenges'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profilePic from './Picture1.jpg'

const Page=()=>{

  //window.onload(alert("this page is still under testing condition. Some features may not work and won't be responsive. Full page will be updated soon. Thank you for reading my portfolio - Isuru Uthpala Bandara"))


  return(

    <>
     <div class="row">
      <div class='col1'>

        <div class="menuBar">

        <div class="title">

          Portfolio

        </div>

        <div >

          <img src={profilePic} alt='profile pic' class='profilePic'/>


        </div>

          <div class="menuBtnGrp">

            <div><AnchorLink href="#home"><button class="menuBtn">Home</button></AnchorLink></div> 
            <div><AnchorLink href="#about"><button class="menuBtn">About</button></AnchorLink></div>
            <div><AnchorLink href="#skills"><button class="menuBtn">Skills</button></AnchorLink></div>
            <div><AnchorLink href="#projects"><button class="menuBtn">Projects</button></AnchorLink></div>
            <div><AnchorLink href="#codechallenges"><button class="menuBtn">Code Challenges</button></AnchorLink></div>
            <div><AnchorLink href="#blog"><button class="menuBtn">Blog</button></AnchorLink></div>
            <div><AnchorLink href="#contacts"><button class="menuBtn">Contacts</button></AnchorLink></div>

          </div>

        </div>
        

      </div>
      <div class="col2">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <CodeChallenges/>
        
        <Contacts/>
        
      </div>

        


     </div>
     <footer style={{backgroundColor:'black', color:'white', textAlign:'center'}}>Designed and Created by Isuru Uthpala Bandara 2023</footer>

    </>

  )
}

export default Page