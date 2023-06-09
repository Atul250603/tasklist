function TaskForm(props){
    const {title,setTitle,description,setDescription}=props;
    return(
        <div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
            </div>
        </div>
    )
}
export default TaskForm;