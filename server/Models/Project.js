const mongoose  = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    creationDate:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Projects', ProjectSchema);