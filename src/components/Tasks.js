import TaskCard from "./TaskCard";

function Tasks(props){
    let {tasks,setTasks}=props;
    return(
        <div className="container mt-4">
            <div className="row">
            {
                (tasks.length>0)?tasks.map((element,idx)=>{return <TaskCard task={element} tasks={tasks} setTasks={setTasks} idx={idx} key={idx} />}):<div className="container text-danger fw-bold text-center">No Tasks Added....</div>
            }
            </div>
        </div>
    )
}
export default Tasks;