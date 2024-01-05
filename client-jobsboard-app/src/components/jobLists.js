
import {useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function JobLists(){

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        async function getJobsList(){
            const response = await fetch("http://localhost:4100/joblistings/");
           if(!response.ok){
            window.alert(`HTTP error! status: ${response.status}`)
           }
            const jobs = await response.json();
            setJobs(jobs);
        }
        getJobsList();
        return;
    },[jobs.length])

   async function deleteJob(id){
        await fetch(`http://localhost:4100/joblistings/${id}`,{
           method:"DELETE" 
        });
        const newJobs = jobs.filter((job)=> job._id !== id);
        setJobs(newJobs);
    }

    function convertDate(date) {
        const dateObj = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate;
      }

       

     
    return(
        <div>
           <h2>Current Openings</h2>
           <table className='table'>
            <thead>
                <tr>
               

                    <td><h5>Title</h5></td>
                    <td><h5>Company</h5></td>
                    <td><h5>Location</h5></td>
                    <td><h5>Salary</h5></td>
                    <td><h5>Email</h5></td>
                    <td><h5>Date</h5></td>
                    <td><h5>Actions</h5></td>
                </tr>
            </thead>
            <tbody>
               {jobs.map((value)=>(
     
                     <tr key={value._id} >
                          <td>{value.title}</td>
                          <td>{value.company}</td>
                          <td>{value.location}</td>
                          <td>{value.salary}</td>
                          <td>{value.email}</td>
                          <td>{convertDate(value.date)}</td>
                          <td><span>
                            <button type="button" class="btn btn-outline-primary">
                            <NavLink to={`/jobDetailsPage/${value._id}`}>Details</NavLink>
                            </button>
                            {/* <button type="button" class="btn btn-outline-primary">
                            <NavLink to={`/editJob/${value._id}`}>Edit</NavLink>
                            </button> */}
                            {/* <button type="button" class="btn btn-outline-primary"
                             onClick={()=>{deleteJob(value._id)}}>
                         Delete
                            </button> */}
                          </span></td>
                     </tr>
                
                )
               )}
            </tbody>
           </table>
        </div>
    )
}