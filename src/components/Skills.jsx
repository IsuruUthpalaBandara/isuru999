import './Skills.css'
import pic1 from './react.png'
import pic2 from './nodeJS.png'
//import pic3 from './angular.png'
import pic4 from './axios.jpg'
import pic5 from './mySql.png'
import pic6 from  './Python-Symbol.png'


import React from 'react'


const Skills=()=>{

    return(

        <>

<div id="skills">
    <div class="skillsIntro">

    Skills

  </div>

  <div class="skillsDetails">

Following are some of the technologies I'm skilled anf familiar with +



    </div>

      <div class="skillsRow">

          <div class="cardLine">

               <div class="card">

                 <img src={pic1} alt="react logo"/>

               </div>

               <div class="card">

                 <img src={pic2} alt="react logo"/>

               </div>

               <div class="card">

                   <img src={pic1} alt="react logo"/>

               </div>


               

            </div>

            <div class="cardLine">

            <div class="card">

<img src={pic4} alt="react logo"/>

</div>

  

               <div class="card">

                 <img src={pic5} alt="react logo"/>

               </div>

               <div class="card">

                   <img src={pic6} alt="react logo"/>

               </div>



            </div>


 



        </div>

  </div>


        
        
        
        
        
        
        </>



    )

}

export default Skills