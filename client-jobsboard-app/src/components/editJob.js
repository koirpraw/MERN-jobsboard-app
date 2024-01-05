import {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';

  
  export default function EditJob(){

    const [jobForm, setJobForm]= useState({
        title:"",
        company:"",
        location:"",
        salary:"",
        email:"",
        description:"",
        jobs:[]
    });

    const params = useParams();
    const navigate = useNavigate();

useEffect(()=>{
    async function fetchData(){
        const id = params.id.toString();
        const response = await fetch(`http://localhost:4100/joblistings/${params.id.toString()}`);

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


function updateForm(value){
    return setJobForm((prev)=>{
        return{...prev,...value}
        });
    }

    async function handleSubmit(event){
        event.preventDefault();
        const editedJob ={
            title:jobForm.title,
            company:jobForm.company,
            location:jobForm.location,
            salary:jobForm.salary,
            email:jobForm.email,
            description:jobForm.description
        };

    await fetch(`http://localhost:4100/joblistings/${params.id}`,{
            method:"PATCH",
            body:JSON.stringify(editedJob),
            headers:{
                'Content-Type': 'application/json'
            },
            
        });
        navigate("/");



        }


    
    return(
        <div>
        <h3>Edit Job </h3>
            <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label htmlFor='title'>Job Title:</label>
                <input type="text" id="title" className="form-control"value={jobForm.title} onChange={(e)=>updateForm({title:e.target.value})}/>

            </div>
            <div className='form-group'>
            <label htmlFor='company'>Company:</label>
                <input type="text" id="company" className="form-control"  value={jobForm.company} onChange={(e)=>updateForm({company:e.target.value})}/>
            </div>

                <div className='form-group'>
                <label htmlFor='location'>Location:</label>
                <input type="text" id="location" className="form-control" value={jobForm.location} onChange={(e)=>updateForm({location:e.target.value})}/>
                </div>
                <div className='form-group'>
                <label htmlFor='salary'>Salary:</label>
                <input type="text" id="salary" className="form-control" value={jobForm.salary} onChange={(e)=>updateForm({salary:e.target.value})}/>
                </div>
                <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" id="email" className="form-control"   value={jobForm.email} onChange={(e)=>updateForm({description:e.target.value})}/>
                </div>
                
                <div className='form-group'>
                <label htmlFor='description'>Job Description:</label>
                <textarea className="form-control" id="description"  value={jobForm.description} maxLength={2000} onChange={(e)=>updateForm({description:e.target.value})}></textarea>
                </div>
               
                <div className="row justify-content-center">
          <div className="col-md-2">
            <button className="btn btn-success m-4">Submit</button>
          </div>
        </div>
            </form>
        </div>
    )
  }