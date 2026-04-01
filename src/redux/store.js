import { createStore } from "redux"

//state intial value
const initialState = {
    count : 50
}

// used of reducer 
// to update state base on action type

const countReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                count:state.count+1
            }
        case 'DECREMENT':
             return{
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}


// create store

const store = createStore(countReducer);
export default store;