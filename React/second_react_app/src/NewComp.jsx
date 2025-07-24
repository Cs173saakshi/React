import { useState } from "react";

function NewComp() {
    const [show, setShow] = useState(false); 

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide Text" : "Show Text"}
            </button>
            {show && <p>This is my secret message........</p>}
        </div>
    );
}

export default NewComp;
