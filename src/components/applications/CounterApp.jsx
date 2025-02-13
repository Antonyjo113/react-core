import React, {useReducer} from "react"


const counterReducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return{count: state.count + 1 }

        case 'decrement':
            return {count: state.count - 1}

        default:
            return state
    }
}

// const counterReducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return { count: state.count + 1 };
//       case 'decrement':
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

const CounterApp = () => {

    // const[state, dispatch] = useReducer(countReducer, {state: 0})
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });



    return (
        <div>
            <p>Counter: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>

        </div>
    )

}

export default CounterApp


// import React, {useState} from 'react'

// const CounterApp = () => {

//     const [count, setCount] = useState(0)

//     const increment = () => {
//         setCount(count +  1)
//     }

//     const decrement = () => {
//         setCount(count -  1)
//     }

//     return(
//         <div>
//             <p>{count}</p>
//             <button onClick={increment}>+</button>
//             <button onClick={decrement}>-</button>
//         </div>

//     )

// }

// export default CounterApp