const params=window.location.search;
const id=new URLSearchParams(params).get('id');
let specificTaskContainer=document.querySelector('.specific-task');
// let editInp = document.createElement('input');

// editInp.classList.add('edit-input');
// editInp.style.padding = '3px';
// editInp.style.fontSize = '24px';
// editInp.type = 'text';

const getSpecificTask=async()=>{
    try{
        let specificTask=await axios.get(`/api/v1/tasks/${id}`);
        let {_id,name,completed}=specificTask.data; 
        
        // console.log(editInp.value)
        // specificTaskContainer.innerHTML=`
        // <div class='spec-task' style='display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:auto;margin-right:auto;margin-top:22px;font-size:32px;padding:7px;'>
        // <p>id: ${_id}</p>
        // <p>name: <input class='edit-input' style='padding:3px;font-size:24px;' type=text value=${name}></p>
        // <p>completed: ${completed?"<button id='button1' value='true'>true</button>":"<button id='button2' value='false'>false</button>"}</p>
        // <button style='backgroudColor:#161B1D;padding:4px'  onclick='editTask(document.querySelector(".edit-input"))')>Edit task</button>
        // </div>`
        specificTaskContainer.innerHTML = `
        <div class='spec-task' style='display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:auto;margin-right:auto;margin-top:22px;font-size:32px;padding:7px;'>
            <p>id: ${_id}</p>
            <p>name: <input class='edit-input' style='padding:3px;font-size:24px;' type=text value=${name}></p>
            <p>completed: <select name="status" id="completionStatus">
            <option value='${completed}'>${completed}</option>
            <option value="${!completed}">${!completed}</option>
          </select></p>
            <button style='backgroundColor:#161B1D;padding:4px' onclick='editTask(document.querySelector(".edit-input"),document.querySelector("#completionStatus"))'>Edit task</button>
        </div>`;

    // Now that the buttons are added to the DOM, you can access them
    // let button1 = document.getElementById('completionStatus');
    // let button2 = document.getElementById('button2');
    
    // console.log(button1.value); // Check if buttons are accessible
       
          
    }
    catch(err){
        console.log(err)
    }
}


getSpecificTask()

const editTask=async(input,status)=>{

    try{
        await axios.patch(`/api/v1/tasks/${id}`,{
            name:input.value,
            completed:status.value
        })
    
        window.location.href='./index.html'
      
        console.log('task submitted')
    }
    catch(err){
        console.log(err);
    }
}