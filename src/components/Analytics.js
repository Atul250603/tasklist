import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck,faClock,faCircleCheck } from '@fortawesome/free-solid-svg-icons'
function Analytics({tasks,user}){
    return(
        <div className="container-fluid w-100 fs-2 fw-semibold">
            <div className="fw-bold">Hey, {user.name}</div>
            <div className="d-flex w-100 analytics rounded">
                <div className="analytics-item text-center d-flex gap-4 justify-content-center align-items-center text-white">
                    <div><FontAwesomeIcon icon={faListCheck} className="mx-2 text-info"/>Total Tasks</div>
                    <div>{tasks.length}</div>
                </div>
                <div className="analytics-item text-center d-flex gap-4 justify-content-center align-items-center text-white">
                    <div><FontAwesomeIcon icon={faClock} className="mx-2 text-warning"/>Pending Tasks</div>
                    <div>
                        {tasks.filter((element)=>element.status==="Pending").length}
                    </div>
                </div>
                <div className="analytics-item text-center d-flex gap-4 justify-content-center align-items-center text-white">
                    <div><FontAwesomeIcon icon={faCircleCheck} className="mx-2 greencolor"/>Completed Tasks</div>
                    <div>
                        {tasks.filter((element)=>element.status==="Completed").length}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Analytics;