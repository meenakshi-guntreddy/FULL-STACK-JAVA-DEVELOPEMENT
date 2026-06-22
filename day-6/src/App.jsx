import {
useState,
useCallback,
useMemo
}
from "react";


import useTodos from "./hooks/useTodos";

import TodoItem from "./components/TodoItem";


function App(){


const [text,setText]=useState("");

const [filter,setFilter]=useState("all");


const {
todos,
dispatch
}=useTodos();




// useCallback

const handleAddTodo =
useCallback(()=>{


if(text.trim()=="")
return;

dispatch({

type:"ADD_TODO",

payload:text

})

console.log(
`[State Updated] New todo added: '${text}'`
)
setText("");


console.log(
"[Callback] handleAddTodo memoized"
)



},[text])

const toggleTodo =
useCallback((id)=>{


dispatch({

type:"TOGGLE_TODO",

payload:id

})


},[])

const deleteTodo =
useCallback((id)=>{


dispatch({

type:"DELETE_TODO",

payload:id

})


},[])

// useMemo

const filteredTodos =
useMemo(()=>{


let result;


if(filter==="active"){


result =
todos.filter(
todo=>!todo.completed
)


}

else if(filter==="completed"){


result =
todos.filter(
todo=>todo.completed
)


}

else{

result=todos;

}


console.log(
`[Memo] Filtered ${result.length} todos`
)



return result;


},[todos,filter])




return(

<div>


<h1>
React Hooks Todo App
</h1>



<input

value={text}

onChange={
e=>setText(e.target.value)
}

placeholder="Add Todo"

/>



<button onClick={handleAddTodo}>
Add
</button>



<br/>


<button onClick={()=>setFilter("all")}>
All
</button>


<button onClick={()=>setFilter("active")}>
Active
</button>


<button onClick={()=>setFilter("completed")}>
Completed
</button>

{
filteredTodos.map(todo=>(

<TodoItem

key={todo.id}

todo={todo}

toggleTodo={toggleTodo}

deleteTodo={deleteTodo}


/>


))
}



</div>

)


}


export default App;