import React , { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTodo , getData } from '../redux/actions/todoActions';

class Todo extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    };

    componentDidMount(){
        this.props.getData();
    };

    handleDelete(id){
        this.props.deleteTodo(id)
    };

    render(){
        const todolist = this.props.todos.length ? (this.props.todos.map(x=>{
            return(
                <li className="list-group-item" key={x._id}>
                    <button className="btn btn-danger btn-sm mr-3" onClick={()=>{this.handleDelete(x._id)}}>&times;</button>
                    {x.todo}
                </li>
            )
        })) : (<h1>Add Something TO DO! you lazy</h1>)

        return(
            <div>
                <ul className="list-group row">
                    {todolist}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        todos : state.todoReducer.todos
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        getData : ()=>dispatch(getData()),
        deleteTodo : id =>{
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Todo);
