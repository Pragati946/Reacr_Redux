import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./action.types";

export reducer = (state,{type,payload})=>{
    switch(type){
        case COUNTER_INCREMENT:{
           return {...state};      
        }
        case COUNTER_DECREMENT:{
            return {...state}; 
        }
        default :{
            return state;
        }
    }
}