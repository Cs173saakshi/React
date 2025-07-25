import { useState,useMemo } from "react"
function FifthComponent(){
const[count,setCount]=useState(0);
const[number,setNumber]=useState(10);
function expFunc(num)
{
    console.log("Exesnsive Function Called..")
    for(let i=1;i<=100000;i++)
    {
        return num*num;
    }
}
const result=useMemo(()=>expFunc(number),[number]);
    return(
        <div>
            <h1>Fifth Component:</h1>
            <h2>Result: {result}</h2><br></br>
            <h3>Count:{count}</h3>
            <button onClick={()=>setCount(count+1)}>UpdateCount</button>
            <h3>Number:{number}</h3>
             <button onClick={()=>setNumber(number+5)}>UpdateNumber</button>
        </div>
    )
}
export default FifthComponent;