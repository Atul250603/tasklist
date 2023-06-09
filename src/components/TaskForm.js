function TaskForm(props){
    const {title,setTitle,description,setDescription}=props;
    return(
        <div>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
            </div>
        </div>
    )
}
export default TaskForm;