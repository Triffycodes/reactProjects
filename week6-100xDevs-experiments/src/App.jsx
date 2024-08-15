import React, { useState } from "react"

function App() {
  const [count,setCounter]= useState(0);
  
  return (
      <div>
        <button onClick={()=>{
          setCounter(count+1);
        }}>Click me to change the count {count}</button>
       
      </div>
      
)}



export default App
