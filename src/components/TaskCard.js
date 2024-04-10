import toast from 'react-hot-toast';
function TaskCard(props){
    let {task,tasks,setTasks,idx}=props;
    async function pendingToCompleted(){
      const url=`${process.env.REACT_APP_UPDATETASK}/${String(task._id)}`;
      let response=await fetch(url,{
        method: "PUT"
      });
      let respMsg=await response.json();
      if(respMsg.success){
        let allTasks=[...tasks];
        allTasks[idx].status='Completed';
        setTasks(allTasks);
        toast.success(respMsg.success);
      }
      else{
        toast.success(respMsg.error);
      }

    }
    async function deleteTask(){
      const url=`${process.env.REACT_APP_DELETETASK}/${String(task._id)}`;
      let response=await fetch(url,{
        method: "DELETE"
      });
      let respMsg=await response.json();
      if(respMsg.success){
        let allTasks=[...tasks];
        allTasks.splice(idx,1);
        setTasks(allTasks);
        toast.success(respMsg.success);
      }
      else{
        toast.success(respMsg.error);
      }
        
    }
    const pendingProperty="border-3 border border-warning text-warning fw-bold";
    const completedProperty="border-3 border border-success text-success fw-bold";
    return(
        <div className="container-fluid my-4">
            <div className=" d-flex w-100">
                <div className={`w-100 text-dark bg-white p-3 rounded ${(task.status==="Pending")?"yellowshadow":"greenshadow"}`}>
                  <div className='d-flex align-items-center gap-3'>
                    <div><h5 className="fs-2 fw-bold">{task.title}</h5></div>
                    <div className={`fw-semibold px-2 py-1 rounded-pill ${(task.status==="Pending")?"bg-warning":"greenbackground"}`}>{(task.status==="Pending")?"Pending":"Completed"}</div>
                  </div>
                  <div className="my-1 fw-semibold">Created On - {new Date(task.createdOn).toLocaleDateString()}</div>
                  <p className="fw-semibold">{task.description}</p>
                  <div className="text-center">
                  <div className="btn-group">
                    {
                      (task.status==='Completed')?<button className="rounded-pill border-3 btn btn-outline-danger fw-bold my-1" onClick={()=>{deleteTask()}}>Delete</button>:<><button className="border-3 rounded-pill btn btn-outline-success fw-bold my-1 mx-1"  onClick={()=>{pendingToCompleted()}}>Completed</button><button className="border-3 rounded-pill btn btn-outline-danger fw-bold my-1 mx-1"  onClick={()=>{deleteTask()}}>Delete</button></>
                    }
                  </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default TaskCard;