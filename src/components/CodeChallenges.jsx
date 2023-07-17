import './Skills.css'
import { useNavigate } from 'react-router-dom'


import React from 'react'


const CodeChallenges=()=>{

    const navigate = useNavigate()

    return(

        <>

<div id="codechallenges">
    <div class="skillsIntro">

    Code Challenges

  </div>

  <div class="skillsDetails">

  <p>I have completed few code challenges found in the internet here and I completed them with some</p>
  <p>front end  GUI. Click below to find more...</p>


    </div>

    <div class="skillsRow">

        <div class="cardLine">

            <div class="ch_card" onClick={()=>navigate("/codechallenges/ceasarscipher")}>

                Ceasars Cipher

            </div>

            <div class="ch_card">

Challenge2

</div>

<div class="ch_card">

Challenge2

</div>





        </div>

 



    </div>

  </div>


        
        
        
        
        
        
        </>



    )

}

export default CodeChallenges