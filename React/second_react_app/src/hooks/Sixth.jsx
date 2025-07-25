import { useState,useRef} from "react"
function Sixth(){
const inputRef=useRef();
function focus(){
    inputRef.current.focus();
 /*    inputRef.current.value="React" */
    inputRef.current.style.color="blue"
    inputRef.current.style.display="none"
}
    return(
        <div>
            <h1>Sixth Component:</h1>
            <input type="text" ref={inputRef}/><br></br><br></br>
            <button onClick={focus}>Focus Input</button>
        </div>
    )
}
export default Sixth;