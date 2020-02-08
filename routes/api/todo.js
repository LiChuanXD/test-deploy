const express = require('express');
const router = express.Router();

const Todo = require('../../mongodb/tododb');

//get all data at /api/todo
router.get('/' , (req , res)=>{
    Todo.find()
        .then(x=>{
            res.json(x)
        })
        .catch(err=>console.log(err))
});

//post request to /api/todo
router.post('/' , (req , res)=>{
    const newTodo = new Todo({
        todo : req.body.todo
    });

    newTodo.save()
        .then(x=>{
            res.json(x)
        })
        .catch(err=>console.log(err))
});

//delete request to /api/todo/:id
router.delete('/:id' , (req , res)=>{
    Todo.findOneAndDelete({_id : req.params.id})
        .then(x=>{
            if(!x){
                res.status(404).json({"message" : "todo not found"})
            }else{
                res.json({"message" : "todo deleted"})
            }
        })
        .catch(err=>console.log(err))
});

module.exports = router;