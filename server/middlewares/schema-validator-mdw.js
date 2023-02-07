const {checkSchema} = require('express-validator');

const {validator} = require('../helpers/validator-helper.js');

module.exports = {
    schemaValidator : (schema)=>[
        checkSchema(schema),
        async (req,res,next)=>{
            validator(req,res,next)
        }
    ]
}