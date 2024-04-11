import { useRef, useState } from "react";
import TaskForm from "./TaskForm";
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function CreateTask({tasks,setTasks,fetchAllTasks,user}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [showSpinner,setshowSpinner]=useState(false);
    let date=new Date().toLocaleString();
    const closeRef=useRef(null);
    async function createtask(e){
        setshowSpinner(true)
        if(title.trim().length===0 || !title){
            toast.error('Title Field is required');
            setshowSpinner(false);
            return;
        }
        if(description.trim().length===0 || !description){
            toast.error('Description Field is required');
            setshowSpinner(false);
            return;
        }
        let task={
            title,
            description,
            status:'Pending',
            createdOn:date,
            user:user.email
        };
        let response=await fetch(process.env.REACT_APP_CREATETASK,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        let respMsg=await response.json();
        if(respMsg.success){
            closeRef.current.click();
            setTitle('');
            setDescription('');
            toast.success(respMsg.success);
            setTasks((prev)=>{return[...prev,respMsg.task]})
            setshowSpinner(false);
        }
        else{
            setshowSpinner(false);
            toast.error(respMsg.error);
        }
    }
    return(
        <>
            <div className="container mt-4 w-100">
                <div className="createTaskBtn position-fixed bottom-0 end-0 m-5">
                    <button type="button" className="rounded-circle px-3 py-1 add-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content text-dark">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">New Task</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setshowSpinner(false); setTitle('');
            setDescription('');}}></button>
                            </div>
                            <div className="modal-body">
                              <TaskForm title={title} setTitle={setTitle} description={description} setDescription={setDescription}/>
                            </div>
                            <div className="modal-footer w-100 text-center">
                              <button type="button" className="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal" onClick={()=>setshowSpinner(false)}>Close</button>
                              <button type="button" className="btn btn-primary d-flex gap-1" disabled={showSpinner} onClick={(e)=>{createtask(e); }}>{(showSpinner)?<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<></>}<div>Create Task</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateTask;