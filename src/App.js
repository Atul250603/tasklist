import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import CreateTask from './components/CreateTask';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([]);
  async function fetchAllTasks(){
    let response=await fetch(process.env.REACT_APP_FETCHALL,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    let allTasks=await response.json();
    setTasks(allTasks.tasks);
  }
  useEffect(()=>{
    fetchAllTasks();
  },[])
  return (
    <>
      <Navbar/>
      <Toaster position="top-right"/>
      <CreateTask tasks={tasks} setTasks={setTasks} fetchAllTasks={fetchAllTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </>
  );
}

export default App;
