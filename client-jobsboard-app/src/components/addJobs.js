import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';


export default function AddJobs() {
    const [jobForm, setJobForm]= useState({
        title:"",
        company:"",
        location:"",
        salary:"",
        email:"",
        description:""
    })

    const [isFormValid, setIsFormValid]= useState(false)
// useEffect(()=>{
//     if(jobForm.title.trim() && jobForm.company.trim() && jobForm.location.trim() && jobForm.salary.trim() && jobForm.email.trim() && jobForm.description.trim()){
//         setIsFormValid(true)
//     }else{
//         setIsFormValid(false)
//     }
// },[jobForm])


useEffect(() => {
    const isTitleValid = jobForm.title.trim() !== '';
    const isCompanyValid = jobForm.company.trim() !== '';
    const isLocationValid = jobForm.location.trim() !== '';
    const isSalaryValid = jobForm.salary.trim() !== '';
    const isEmailValid = jobForm.email.trim() !== '';
    const isDescriptionValid = jobForm.description.trim() !== '';
    setIsFormValid(
      isTitleValid &&
      isCompanyValid &&
      isLocationValid &&
      isSalaryValid &&
      isEmailValid &&
      isDescriptionValid
    );
  }, [jobForm]);



    const navigate = useNavigate();

    function updateForm(value){
        return setJobForm((prev)=>{
            return{...prev,...value}
        })
    }

    async function handleSubmit(event){
        event.preventDefault();

        const newJob ={...jobForm};

        await fetch("http://localhost:4100/joblistings/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newJob)
        })
        .catch((err)=>{
            window.alert(err);
            return;
        })

        setJobForm({
            title:"",
            company:"",
            location:"",
            salary:"",
            email:"",
            description:""
        })
        navigate("/");

    }

    
    return(
        <div>
            <form>
                <label>Job Title:</label>
                <input type="text" name="title" className="form-control"  placeholder="Enter Job Title" onChange={(e)=>updateForm({title:e.target.value})}/>
                <label>Company:</label>
                <input type="text" name="company" className="form-control"  placeholder="Enter Company Name" onChange={(e)=>updateForm({company:e.target.value})}/>
                <label>Location:</label>
                <input type="text" name="location" className="form-control"  placeholder="Enter Location" onChange={(e)=>updateForm({location:e.target.value})}/>
                <label>Salary:</label>
                <input type="text" name="salary" className="form-control"  placeholder="Enter Salary/range" onChange={(e)=>updateForm({salary:e.target.value})}/>
                <label>Email:</label>
                <input type="email" name="email" className="form-control"  placeholder="Enter Contact email" onChange={(e)=>updateForm({email:e.target.value})}/>
                <label>Job Description:</label>
                <textarea className="form-control" name="description" placeholder="Enter Job Description" maxLength={2000} onChange={(e)=>updateForm({description:e.target.value})}></textarea>

                <div className="row justify-content-center">
          <div className="col-md-2">
            <button className="btn btn-success m-4" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
            </form>
        </div>
    )
}