const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:['true','cannot add blank note'],
        trim:true,
        maxlength:['22','cannot add more then 22 characteristics']    
    },
    completed: {
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Task', taskSchema);
