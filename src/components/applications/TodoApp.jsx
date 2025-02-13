import React, {useState} from 'react'




const TodoApp = () => {

    const[todos, setTodos] = useState([])
    const[newTodo, addNewTodo] = useState('')

    const addNewTodos = () => {
        setTodos([...todos, {task: newTodo, completed: false, index: todos.length + 1}])
        addNewTodo('')
    }

    const updateTodo = (index) => {
        let updateTodo = [...todos]
        updateTodo[index].completed = !updateTodo[index].completed
        setTodos(updateTodo)
    }

    const deleteTodo = (index) => {
        let deletetodo = [...todos]
        deletetodo = deletetodo.filter((data, id) => id != index)
        setTodos(deletetodo)
    }


    return (
        <div>
            <div>
                <input type='text' value={newTodo} onChange={(e) => addNewTodo(e.target.value)} placeholder='Add new Todo'></input>
                <button onClick={addNewTodos}>Add new Todo</button>
            </div>
            <div>
                <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{textDecoration : todo.completed ? 'line-through' : 'none' }}>
                        <input type='checkbox' checked={todo.completed} onChange={() => updateTodo(index)}/>
                        {todo.task}
                        <button onClick={() => deleteTodo(index)}>delete</button>
                    </li>
                ))}
                </ul>
            </div>

        </div>
    )

}

export default  TodoApp


// import React, {useState} from 'react'



// const TodoApp = () => {

//     const[todos, setTodos] = useState([])
//     const[newTodo, setNewTodo] = useState('')

//     const addNewTodo = () => {
//         if (newTodo.trim() === '') return;
//         console.log('22222');
//         // let todoList = [...todos]
//         // console.log("todoList", todoList);
//         setTodos([...todos, {text:newTodo, completed: false, index: todos.length+1}]);
//         setNewTodo('');
//     }
//     // const addNewTodo = () => {
//     //     console.log('11111');
//     //     if (newTodo.trim() === '') return; // Prevent adding empty todos
//     //     setTodos([...todos, { text: newTodo, completed: false }]);
//     //     setNewTodo(''); // Reset input field
//     // };
//     console.log('todos', todos);

//     const toggleTodo = (index) => {
//         let todoList = [...todos];
//         todoList[index].completed = !todoList[index].completed;
//         setTodos(todoList);
//     }

//     // const toggleTodo = (index) => {
//     //     const updatedTodos = [...todos];
//     //     updatedTodos[index].completed = !updatedTodos[index].completed;
//     //     setTodos(updatedTodos);
//     // };

//     const removeTodo = (index) => {
//         let todoList = [...todos]
//         let deleteTodo = todoList.filter((data, id) => id != index)
//         setTodos(deleteTodo)
//     }

//     return (

//         <div>
//             <div>
//                 <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Enter new Todo'></input>
//                 <button onClick={addNewTodo}>Add new Todo</button>
//             </div>
//             <div>
//                 <ul>
//                 {todos.map((todo, index) =>(
//                     <li key={index} style={{ textDecoration : todo.completed ? 'line-through' : 'none' }}>
//                            <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(index)} />
//                            {todo.text}
//                            <button onClick={() => removeTodo(index)}>delete</button> 
//                     </li>
//                 ))}
//                 </ul>
//                 {/* <ul>
//         {todos.map((todo, index) => (
//           <li
//             key={index}
//             style={{
//               textDecoration: todo.completed ? 'line-through' : 'none',
//             }}
//           >
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(index)}
//             />
//             {todo.text}
//             <button onClick={() => removeTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul> */}
//             </div>
//         </div>

//     )

// }



// export default TodoApp