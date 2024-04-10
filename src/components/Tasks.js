import TaskCard from "./TaskCard";

function Tasks(props){
    let {tasks,setTasks}=props;
    return(
        <div className="w-100 mt-4">
            <div className="w-100">
            {
                (tasks.length>0)?tasks.map((element,idx)=>{return <TaskCard task={element} tasks={tasks} setTasks={setTasks} idx={idx} key={idx} />}):<div className="container redcolor fw-semibold text-center fs-4">No Tasks Added....</div>
            }
            </div>
        </div>
    )
}
export default Tasks;