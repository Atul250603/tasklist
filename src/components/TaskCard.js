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
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex my-2">
            <div class="card border border-3 border-primary w-100">
                <div class="card-body flex-fill">
                  <h5 class="card-title text-center text-primary fw-bold">{task.title}</h5>
                  <p class="card-text fw-semibold fst-italic">{task.description}</p>
                  <div className="text-center">
                  <div className={`rounded-pill my-1 ${(task.status==='Pending')?pendingProperty:completedProperty}`}>{task.status}</div>
                  <div className="my-2 fw-semibold">&#128337; {task.createdOn}</div>
                  <div className="btn-group">
                    {
                      (task.status==='Completed')?<button className="rounded-circle border-3 btn btn-outline-danger fw-bold my-1" onClick={()=>{deleteTask()}}>&#128465;</button>:<><button className="border-3 rounded-circle btn btn-outline-success fw-bold my-1 mx-1"  onClick={()=>{pendingToCompleted()}}>&#10003;</button><button className="border-3 rounded-circle btn btn-outline-danger fw-bold my-1 mx-1"  onClick={()=>{deleteTask()}}>&#128465;</button></>
                    }
                  </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default TaskCard;