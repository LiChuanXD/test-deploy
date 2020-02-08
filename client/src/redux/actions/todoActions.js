import { DELETE_TODO , ADD_TODO , GET_DATA , IS_LOADING } from './types';
import axios from 'axios';

export const isLoading = () => {
    return {
        type : IS_LOADING
    }
};

export const getData = () => dispatch =>{
    dispatch(isLoading());
    axios.get('/api/todo')
        .then(res=>{
            dispatch({
                type : GET_DATA,
                payload : res.data
            })
        }).catch(err=>console.log(err))
};

export const deleteTodo = id => dispatch =>{
    axios.delete(`/api/todo/${id}`)
        .then(res=>{
            dispatch({
                type : DELETE_TODO,
                payload : id
            })
        }).catch(err=>console.log(err))
};

export const addTodo = obj => dispatch =>{
    axios.post('/api/todo' , obj)
        .then(res=>{
            dispatch({
                type : ADD_TODO,
                payload : res.data
            })
        }).catch(err=>console.log(err))
};