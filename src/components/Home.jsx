import React from 'react'
import pic from './isuru04.jpg'
import "./Home.css"

const maintenanceAlart=()=>{
  alert("this page is under some maintenance work. most features might not work until fixed")
}

export default function Home() {
  
  return (
    <>
    <maintenanceAlart/>
    <div id="home">
    <body class="home">
    
  

    <div class="row">
      <div class="column1">
        <img class="pic" src={pic} alt="pic" />
      </div>
      <div class="column2">
        <div class="intro">Digital Portfolio</div>

        <div class="description">
         <p>Hi,</p>
         <p>my name is Isuru Uthpala Bandara</p>
         <p>I'm a web & software developer</p>    
        </div>


      </div>

    </div>


    




 










       

     </body>  
    
        
     </div>
    </>
  )
}
