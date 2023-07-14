import React from 'react'
import './ProjectCSS.css'

export default function BugTracker() {
  return (
    <>
    <div class="projectTitle">Bug Tracker</div>
    <div class="projectDes">
      <p>The purpose of this project is to record the bugs</p>
      <p>encountered when developing a project.The user</p>
      <p>needs to sign up first and then to log in to start</p>
      <p>a new project. Then the bugs can be recorded and </p>
      <p>the bug status can be modified. A group of developers</p>
      <p>can record the bugsin the same project so that all </p>
      <p>the team can monitor the bugs tracked and their </p>
      <p>current status. The project has a backend written </p>
      <p>using Node.Js and Express.Js. The databse is mySQL.</p>
      <p>Once you logged in, the authentication token expires</p>
      <p>afer certain time. For the frontend the AntDesign</p>
      <p>GUI library has been used. You can check the working</p>
      <p>app, its codes, the server code and other details by</p>
      <p>clicking the links.</p>
    </div>

    
    <div class="projectLinks"><a href="https://bug-tracker-le5z.vercel.app/"><button>open app bugTracker</button></a></div>
    <div class="projectLinks"><a href="https://github.com/IsuruUthpalaBandara/BugTracker"><button>gitHub repo (bugTracker - frontend)</button> </a></div>
    <div class="projectLinks"><a href="https://github.com/IsuruUthpalaBandara/bugServer"><button>gitHub repo (bugTracker - server) </button></a></div>
    </>
  )
}
