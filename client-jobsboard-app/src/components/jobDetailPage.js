import { NavLink } from "react-router-dom"

// export default function JobDetailPage(){
//     return(
//         <div>
//         <nav>
//         <div class="nav nav-tabs" id="nav-tab" role="tablist">
//           <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Job Detail</button>
//           <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">About Us</button>
//           <span class="navbar-text">
        
            
              
//             </span>
//         </div>
//         </nav>
//             <h1>Job Detail</h1>
//             <p>


// GitHub Copilot
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
// Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
// Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
// Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
//    Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
//     Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
//      Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
//       Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
// Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
// Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.
//  Sed euismod, velit vel bibendum bibendum, elit sapien bibendum sapien, vel commodo sapien elit vel nisl.</p>
//         </div>
//     )
// }

import {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';

  
  export default function JobDetailsPage(){

    const [jobForm, setJobForm]= useState({
        title:"",
        company:"",
        location:"",
        salary:"",
        email:"",
        description:"",
        jobs:[]
    });

    const [jobs, setJobs] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

useEffect(()=>{
    async function fetchData(){
        const id = params.id.toString();
        const response = await fetch(`http://localhost:4100/joblistings/${id}`);

        if(!response.ok){
            window.alert(`HTTP error! status: ${response.status.toString()}`)
            return;
        }

        const job = await response.json();
        if(!job){
            window.alert(`Could not fond the Job with id ${id}`);
            navigate("/");
            return;
        }
        setJobForm(job);
    }

    fetchData();
    return;
},[params.id,navigate])

        async function deleteJob(id){
          await fetch(`http://localhost:4100/jobListings/${id}`,{
              method:"DELETE"
              
          });
          const newJobs = jobs.filter((job)=> job._id !== id);
          setJobs(newJobs);
          navigate("/");
        }


    
    return(
        <div>
        <h3 style={{textAlign:"center"}}>{jobForm.company} </h3>
            <div className="card m-4 p-4 shadow border-0" style={{textAlign:"center"}}>
         <h3 >Job Title: {jobForm.title}</h3>
            <h5>{jobForm.company}</h5>
            <h5>Location: {jobForm.location}</h5>
         
            
            <p>{jobForm.description}</p>
            <p>Salary(USD): ${jobForm.salary}</p>
            <a href="#"><p>email:{jobForm.email}</p></a>


            </div>
            <div style={{textAlign:"center"}}>
              <button className="btn btn-outline-primary m-2">
              <NavLink to={`/editJob/${jobForm._id}`}>Edit</NavLink>
              </button>
              <button className="btn btn-outline-danger m-2"
              onClick={()=>deleteJob(jobForm._id)}
               >DELETE</button>
            </div>
        </div>
    )
  }