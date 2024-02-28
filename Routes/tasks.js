// const express=require('express');
// const {getAllTask,updateTask,createTask,deleteTask,patchTask}=require('../Controller/methods');
// const router=express.Router();


// router.route('/').get(getAllTask).post(createTask)
// router.route('/:id').put(updateTask).delete(deleteTask).patch(patchTask)
// module.exports=router;
const express=require('express');
const router=express.Router();
const {getAllTask,postTask,getSingleTask,deleteTask,patchTask}=require('../Controller/methods');
router.route('/').get(getAllTask).post(postTask);
router.route('/:id').delete(deleteTask).get(getSingleTask).patch(patchTask);

module.exports=router;




