const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    state:{
        type:String,
        default: "incomplete"
    },
    projectId:{
        type: mongoose.Types.ObjectId,
        ref:"Projects"
    },
    date:{
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Tasks", TaskSchema);