//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
            //extract title and description from reauest body
      
            //create a new Todo Obj and insert in DB
            const todos = await Todo.find({});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:'Entire todo data is fetched'
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


exports.getTodoById = async(req,res) => {
    try {
            //extract title and description from reauest body
               const id=req.params.id;
            //create a new Todo Obj and insert in DB
            const todo = await Todo.find({_id:id});
            //send a json response with a success flag
            if(!todo){
                return res.status(404).json({
                    success:false,
                    message:"id is not found"
                });
            }
            res.status(200).json(
                {
                    success:true,
                    data:todo,
                    message:`todo data ${todo}is fetched`
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