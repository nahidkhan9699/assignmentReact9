import React,{useState}from "react";
export const Counter=()=>{
        const[Count,setCount]=useState(0)
    return (
        <div className="main">
        
            <h1>Counter</h1>
                <button onClick={() => setCount(Count-1)}>-</button>
            <span>
                {Count}
            </span>
                <button onClick={()=>setCount(Count+1)}>+</button>
        </div>
    )
    
}