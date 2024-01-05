import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/navbar';
import {Route,Routes} from 'react-router-dom';
import JobLists from './components/jobLists';
import AddJobs from './components/addJobs';
import EditJob from './components/editJob';
import JobDetailPage from './components/jobDetailPage';
import RecruiterPage from './components/recruiterPage';
import LoginPage from './components/loginPage';
import UserSignup from './components/userSignup';

function App() {
  return (
    <div >
    <Navbar/>
<div style={{margin:"20px"}}>
<Routes>
<Route exact path="/" element={<JobLists/>}></Route>
<Route exact path="/addjob" element={<AddJobs/>}></Route>
<Route exact path="/editjob/:id" element={<EditJob/>}></Route>
<Route exact path="/jobDetailsPage/:id" element={<JobDetailPage/>}></Route>
<Route exact path="/recruiterPage" element={<RecruiterPage/>}></Route>
<Route path="/login" element={<LoginPage/>}></Route>
<Route path="/register" element={<UserSignup/>}></Route>
  
</Routes>

</div>




    </div>
  );
}

export default App;
