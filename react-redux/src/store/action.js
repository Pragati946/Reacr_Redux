import { COUNTER_INCREMENT } from "./action.types";
import { COUNTER_DECREMENT } from "./action.types";
import {
    ADD_TODO,
    COMPLETE_TODO,
    UPDATE_TODO,
}
from "./action.types"
export const   counterInc =  ()=>({type:COUNTER_INCREMENT});
export const  counterDec =()=> ({type:COUNTER_DECREMENT});

//todo app

export const todoAdd=(payload)=>({type:ADD_TODO.charAt,payload});
export const todoComplete =(id)=>({type:COMPLETE_TODO,payload,id});
export const todoUpdate =(payload)=>({type:UPDATE_TODO,payload});
export const todoRemove =(id)=>({type:DELETE_TODO,payload,id});

