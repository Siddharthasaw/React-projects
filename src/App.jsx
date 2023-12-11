import { useState } from 'react';
import './App.css'

const App = ()=>{

  let [counter, setCounetr] = useState(15);

   const addValue = ()=>{
    if(counter<20){
      setCounetr(++counter);
    }
    
     
   }

   const removeValue = ()=>{
      if(counter>0)
      {
        setCounetr(--counter);
      }
      
   }
  return(
    <>
      <h1>Counter Value = {counter}</h1>
        <button id='btn1' onClick={addValue}>increse value</button>
        <button onClick={removeValue}> decrese value</button>
    </>
  )
}

export default App;