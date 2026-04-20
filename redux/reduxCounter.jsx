// import {useSelector, useDispatch} from 'react-redux';
// import { decrement, increment, reset } from './counterSlice';
// import { modeHandle } from './modeslice';
// import { useEffect } from 'react';

// function ReduxCounter(){

//     const counterValue = useSelector((state)=> state.counter.value);

//     const dispatchInstance = useDispatch();
//     const mode = useSelector((state)=> state.mode.mode);

//     function plus(){
//         dispatchInstance(increment())
//     }
//     function minus(){
//         dispatchInstance(decrement())
//     }
//     function stateReset(){
//         dispatchInstance(reset())
//     }
//     function themeChange(){
//         dispatchInstance(modeHandle());
//     }
//       useEffect(()=>{
//          document.body.className = mode === "dark" ? "dark-mode" : "light-mode";
//       },[mode]);
//     return(
//         <div>
//             <div className='navbar'>
//                 <button onClick={themeChange}  className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white modeSet" >{mode === "dark" ? "light" : "dark"}</button>
//             </div>
//             <h2>Redux Counter: {counterValue}</h2>
//             <button onClick={plus} className='btnforContext'>+</button>
//             <button onClick={minus} className='btnforContext'>-</button>
//             <button onClick={stateReset} className='btnforContext'>reset</button>
//         </div>
//     )
// };

// export  default ReduxCounter;