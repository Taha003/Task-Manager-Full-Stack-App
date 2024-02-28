let taskContainer=document.querySelector('.task-container');
let inputTask=document.querySelector('.form-input');

//fetching the tasks using axios.get method
const getTask = async () => {
    try {
        let myTasks = await axios.get('/api/v1/tasks');
        console.log(myTasks.data.task);
        let mapTasks = myTasks.data.task.map((task) => {
            return `<div style='display:flex;margin-top:4px;padding:10px' class='myTask'>
            <p style='width:200px' class="${task.completed?'':'lineThrough'}">${task.name}</p>
            <div style='display:flex;'>
            
            <button onclick="deleteTask('${task._id}')">delete</button>
                <a href='task.html?id=${task._id}'><button onclick="editTask('${task._id}')">Edit task</button></a>
            </div>
        </div>`;
        });
        if (mapTasks) {
            taskContainer.innerHTML = mapTasks.join(' ');
        } else {
            taskContainer.innerHTML = '<h2>No task found!</h2>';
        }
    } catch (err) {
        console.log(err);
    }
};

const deleteTask = async(taskId) => {
    try{
        await axios.delete(`/api/v1/tasks/${taskId}`);
        console.log('Task Deleted successsfully')
        getTask()
    }
    catch(err){
        console.log(err)
    }
};


getTask();

const postTask=async(e)=>{
    e.preventDefault();
    let inputValue=inputTask.value;
    try{
        await axios.post('/api/v1/tasks',{name:inputValue});
        console.log('task submitted successfully');
        inputTask.value='';
        getTask();
        console.log('Task submitted successfully');
        setTimeout(()=>{
            alert('Task submitted successfully')
        },2000)
    }
    catch(err){
        console.log(err);
    }

}