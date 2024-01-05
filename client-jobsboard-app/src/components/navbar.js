import {react}  from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
    
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <NavLink class="navbar-brand" to="/">PKJOBS</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text">
            <NavLink  to="/register">
            <button type="button" class="btn btn-outline-primary m-2">LogIn/SignUp</button>   
            </NavLink>
            <NavLink  to="/recruiterPage">
            <button type="button" class="btn btn-primary">RECRUITER</button>   
            </NavLink>
           
            
            
              
            </span>
          </div>
        </div>
      </nav>

       

    )
}