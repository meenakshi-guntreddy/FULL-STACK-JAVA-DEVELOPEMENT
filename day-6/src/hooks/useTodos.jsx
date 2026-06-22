import {useReducer,useEffect} from "react";


const initialState = [];


function todoReducer(state,action){


console.log("[Reducer Action]",action);


switch(action.type){


case "ADD_TODO":

return [
 ...state,
 {
 id:Date.now(),
 text:action.payload,
 completed:false
 }
]



case "DELETE_TODO":

return state.filter(
todo=>todo.id!==action.payload
)



case "TOGGLE_TODO":

return state.map(todo=>

todo.id===action.payload
?
{
...todo,
completed:!todo.completed
}
:
todo

)



default:
return state;

}


}




function useTodos(){


const [todos,dispatch]=useReducer(
todoReducer,
initialState
);



// Load data when app starts

useEffect(()=>{


const saved =
localStorage.getItem("todos");


if(saved){

dispatch({
type:"LOAD",
payload:JSON.parse(saved)
})

}


console.log("[Effect Ran] Data Loaded");


},[]);





// Save data whenever todos change

useEffect(()=>{


localStorage.setItem(
"todos",
JSON.stringify(todos)
)


console.log(
"[Effect Ran] Todos saved to localStorage"
)


},[todos])



return {
todos,
dispatch
}


}


export default useTodos;