import React , { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../redux/actions/todoActions';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e){
        this.setState({
            ...this.state,
            todo : e.target.value
        })
    };

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            ...this.state , 
            todo : ""
        });
        this.props.addTodo(this.state)
    }

    render(){
        return(
            <div className="row">
                <button className="btn btn-primary form-control" data-toggle="modal" data-target=".bd-example-modal-lg">
                ADD TODO
                </button>

                <div id="modal" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Todo : </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <input required type="text" name="todo" className="form-control" placeholder="ADD TODO" onChange={this.handleChange} value={this.state.todo} />
                                    <button type="submit" className="btn btn-primary form-control">ADD TODO</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addTodo : obj =>{
            dispatch(addTodo(obj))
        }
    }
}

export default connect(null , mapDispatchToProps)(AddTodo);