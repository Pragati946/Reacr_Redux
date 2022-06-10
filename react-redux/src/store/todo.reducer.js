import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    UPDATE_TODO,

}from "./action.types";

export const todoREducer =(state={type:[]},{type,payload}){
switch(type){
    case ADD_TODO:{

       return {...state};      
    }
    case DELETE_TODO:{
        return {...state}; 
    }
    case COMPLETE_TODO:{
        return {...state}; 
    }
    case UPDATE_TODO:{
        return {...state}; 
    }
    default :{
        return state;
    }
}
}