
// const getAllTask=(req,res)=>{
//     res.send('Get all task')
// }

// const createTask=(req,res)=>{
//     res.json(req.body);
// }

// const updateTask=(req,res)=>{
//     res.json(req.body)
// };

// const deleteTask=(req,res)=>{
//     res.send('Delete task')
// }

// const patchTask=(req,res)=>{
//     res.send('Patch task')
// }


// module.exports={getAllTask,updateTask,createTask,deleteTask,patchTask};

const taskschema=require('../Model/Tassk')

const getAllTask=async(req,res)=>{
    try{
        let task=await taskschema.find({});
        res.status(200).json({task});
    }
    catch(err){
        res.status(500).json({msg:err});
    }
}
const postTask=async(req,res)=>{
    
    
    try{
        const task=await taskschema.create(req.body);
        res.status(201).json({task});
        
    }
    catch(err){
        res.status(500).json({msg:err});
    }
  
}

const getSingleTask=async(req,res)=>{
    
    try{
        let taskId=req.params.id;
        const specificTask=await taskschema.findOne({_id:taskId});
        specificTask?res.status(200).json(specificTask):res.status(404).json({msg:`Nothing found with id ${taskId}`})
    }
    catch(err){
        res.status(500).json({msg:err})
        console.log(err)
    }   
}

const deleteTask=async(req,res)=>{
    try{
        let taskId=req.params.id;
        let TaskAfterDeletion=await taskschema.findOneAndDelete({_id:taskId});
        TaskAfterDeletion?res.status(200).json(TaskAfterDeletion):res.status(404).json({msg:`Nothing found with ${taskId}`});
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const patchTask=async(req,res)=>{
    // res.json({id:req.params.id});

    try{
    const taskId=req.params.id;
    let taskAfterUpdate=await taskschema.findOneAndUpdate({_id:taskId},req.body,{
        new:true,
        runValidators:true
    });

    if(!taskAfterUpdate){
        res.status(500).json({msg:'Id not found'})
    }
    else{
        res.status(200).json(taskAfterUpdate)
    }
}
catch(err){
 res.status(500).json({msg:err})
}   

}

module.exports={getAllTask,postTask,getSingleTask,deleteTask,patchTask}