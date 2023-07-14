import './Projects.css'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import bugTrackerLogo from '../projects/logos/bug.png'
import quickCVLogo from '../projects/logos/quickCVLogo.png'
import touristLogo from '../projects/logos/touristLogo.png'


const Projects=()=>{

    const navigate = useNavigate()

    return(

        <>

<div id="projects">
    <div class="projectsIntro">

    Projects

  </div>

  <div class="projectsDetails">


    <p>Following are few projects completed by me. I have used React as the front end library and Node.js for the server where a backend is</p> 
    <p>required. These projects include sign in & login, security authentication and CRUD applications. You can click on the icons below and</p>
    <p>find out more details and run those applications to check out how they work. Further more you can see the code behind it since I have</p>
    <p>provided the  gitHub links along with the descriptions.</p>

    </div>

    <div class="projectRow">

        <div class="cardLine">
            


            <div class="project_card" onClick={()=>navigate('/projects/bugtracker')}>
            <img src={bugTrackerLogo} alt="logo"/>
                BugTracker
            </div>

            <div class="project_card" onClick={()=>navigate('/projects/quickcv')}>
            <img src={quickCVLogo} alt="logo"/>
                QuickCV

            </div>



<div class="project_card" onClick={()=>navigate('/projects/tourist')}>
<img src={touristLogo} alt="logo"/>
theTourist

</div>








        </div>

 



    </div>

  </div>


        
        
        
        
        
        
        </>



    )

}

export default Projects