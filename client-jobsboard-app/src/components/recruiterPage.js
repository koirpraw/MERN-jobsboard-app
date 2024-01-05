import { NavLink } from "react-router-dom"

export default function RecruiterPage(){
    return(
     
            
            <div className="row justify-content-center">
           <h1 style={{textAlign:"center"}}>Recruiter Page</h1>
            
          <div className="col-md-2">
          <NavLink to="/addjob" className="nav-link" activeClassName="active">
            <button className="btn btn-primary m-4" >Add Jobs</button>
            </NavLink>
          </div>
        </div>
           
        
    )
}