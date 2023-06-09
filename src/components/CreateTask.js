import { useRef, useState } from "react";
import TaskForm from "./TaskForm";
import toast from 'react-hot-toast';
function CreateTask(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let date=new Date().toLocaleString();
    const closeRef=useRef(null);
    async function createtask(e){
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
            // let allTasks=[...props.tasks];
            // allTasks.push(task);
            // props.setTasks(allTasks);
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
                    <button type="button" class="border-3 rounded-pill btn btn-outline-primary fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add New Task
                    </button>
                </div>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">New Task</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <TaskForm title={title} setTitle={setTitle} description={description} setDescription={setDescription}/>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary" onClick={(e)=>{createtask(e)}}>Create Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateTask;