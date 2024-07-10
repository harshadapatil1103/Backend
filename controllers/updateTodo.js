//import th model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res) => {
    try {
            //extract title and description from reauest body
            const {id}=req.params;
            const {title,description}=req.body;
            //create a new Todo Obj and insert in DB
            const todos = await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()}, {new: true});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:'updated '
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


