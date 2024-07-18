const{Router}=require("express");
const { submitForm } = require("../controllers/FormController");
const{addFormValidationRules}=require("../middlewares/validators/CheckFormSchema")
const { validationResult } = require("express-validator");
const router=Router();


router.post("/form-submit",addFormValidationRules(),(req,res,next)=>{
const errors=validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).json({error:errors.array()});
}
next();
},submitForm);

module.exports=router;