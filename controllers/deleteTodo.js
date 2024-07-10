//import th model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try {
            //extract title and description from reauest body
            const {id}=req.params;
           
            //create a new Todo Obj and insert in DB
            const todos = await Todo.findByIdAndDelete({_id:id});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:'deleted'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


