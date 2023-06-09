import { useRef, useState } from "react";
import TaskForm from "./TaskForm";
import toast from 'react-hot-toast';
function CreateTask(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let date=new Date().toLocaleString();
    const closeRef=useRef(null);
    async function createtask(e){
        if(title.trim().length===0 || !title){
            toast.error('Title Field is required');
            return;
        }
        if(description.trim().length===0 || !description){
            toast.error('Description Field is required');
            return;
        }
        let task={
            title,
            description,
            status:'Pending',
            createdOn:date
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
            await props.fetchAllTasks();
        }
        else{
            toast.error(respMsg.error);
        }
    }
    return(
        <>
            <div className="container mt-4">
                <div className="createTaskBtn container text-center">
                    <button type="button" className="border-3 rounded-pill btn btn-outline-primary fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add New Task
                    </button>
                </div>
                
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">New Task</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <TaskForm title={title} setTitle={setTitle} description={description} setDescription={setDescription}/>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" onClick={(e)=>{createtask(e)}}>Create Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateTask;