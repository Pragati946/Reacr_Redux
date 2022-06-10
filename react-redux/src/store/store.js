import { legacy_createStore,combineReducers } from "redux";
import { counterReducer} from "./counter.reducer";
 import { todoREducer } from "./todo.reducer";

 const rootreducer=combineReducers({
     counter:counterReducer,
     todo:todoREducer,
 })

 const a ={
     count:0,
     todos:[],
 };
 const b ={
    count:0,
    todos:[],
};
