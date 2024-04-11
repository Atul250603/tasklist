import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import CreateTask from './components/CreateTask';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Analytics from './components/Analytics';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './components/Home';
function App() {
  const [tasks, setTasks] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  async function fetchAllTasks(){
    let response=await fetch(process.env.REACT_APP_FETCHALL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
      ,
      body:JSON.stringify({email:user.email})
    });
    let allTasks=await response.json();
    setTasks(allTasks.tasks);
  }
  useEffect(()=>{
    if(user){
    fetchAllTasks();
    }
  },[user])
  return (
    <div className='postion-relative container-fluid w-100'>
      {(!isLoading)?<div className='w-100'>
      <Navbar/>
      <Toaster position="top-right"/>
      {(isAuthenticated)?<Routes>
        <Route exact path="/" element={<div className='w-100'><Analytics tasks={tasks} user={user}/>
        <CreateTask tasks={tasks} setTasks={setTasks} fetchAllTasks={fetchAllTasks} user={user}/>
        <Tasks tasks={tasks} setTasks={setTasks} user={user}/></div>}/>
      </Routes>:<div className='w-100'>
            <Home/>
        </div>}
      </div>:<div className='fw-bold fs-1 d-flex align-items-center justify-content-center' style={{height:"90vh"}}>Loading.....</div>}
    </div>
  );
}

export default App;
