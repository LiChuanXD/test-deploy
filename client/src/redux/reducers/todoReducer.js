import { DELETE_TODO, ADD_TODO , GET_DATA , IS_LOADING } from '../actions/types'

const initState = {
    todos : [],
    loading : false
};

export const todoReducer = (state = initState , action) =>{
    switch(action.type){
        case GET_DATA:
            return {
                ...state ,
                loading : false,
                todos : action.payload
            };
        
        case DELETE_TODO:
            return {
                ...state , 
                todos : state.todos.filter(x=>x._id !== action.payload)
            };

        case ADD_TODO:
            return {
                ...state ,
                todos : [...state.todos , action.payload]
            };

        case IS_LOADING:
            return{
                ...state , 
                loading : true
            };

        default:
            return state;
    }
};