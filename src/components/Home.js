import todo from '../images/todo.png'
function Home(){
    return(
        <div className="container-fluid fs-2 fw-bold mainpage">
            <div className='w-100 mainpagecontainer'>
                <div>
                    <div className='my-2'>A One Stop Solution To Manage All Your Tasks</div>
                    <div className='my-2'>You Can Do The Following Operations : </div>
                    <div className='my-2'>
                        <ul>
                            <li className='my-2'>Create New Tasks</li>
                            <li className='my-2'>Update Current Task's Status</li>
                            <li className='my-2'>Delete Tasks</li>
                            <li className='my-2'>Manage Tasks</li>
                        </ul>
                    </div>
                </div>
                <div>
                <img src={todo} alt="to-do illustration"/>
                </div>
        </div>
        </div>
    )
}
export default Home;