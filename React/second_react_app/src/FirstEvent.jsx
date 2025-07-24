import { useState } from "react";

function FirstEvent() {
/*     /* const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted by: ${name}`);
    }; */
/* const handleMouseEnter=()=>{
    console.log("Mouse entered the box:");
}
const handleMouseLeave=()=>{
    console.log("Mouse left the box:");
}
    return (
        <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            width:"200px",
            height:"200px",
           backgroundColor:"lightblue",
           textAlign:"center",
           lineHeight:"200px"
        }}>
        Hover over me!!!!!!!! */ 
            {/* <form onSubmit={handleSubmit}>
                <h2>Enter Name:</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <br /><br/>     
                <button type="submit">Submit</button>
            </form> */}
            const handleKeyDown=(event)=>{
                if(event.key==='Enter'){
                alert(`Welcome:`);
            }}
        return (

<div>
{/* <button onClick={()=>greet("Ajay")}>Greet</button */}
<h2>tYPE SOMETHING:</h2>
<input type="text" onKeyDown={handleKeyDown}/>
        </div>
    );
}

export default FirstEvent;
