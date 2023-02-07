const {validationResult} = require('express-validator');

module.exports ={
    validator: (req,res,next)=>{
        const errors = validationResult(req)
        if(errors.isEmpty()) return next()
        else return res.status(400).send({errors: errors.array()})
    }
}