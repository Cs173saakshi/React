import { useState } from "react";
function ComponentA() {
  return <p>This is Saakshi</p>;
}
function ComponentB() {
  return <p>I am A Student</p>;
}
function ToggleComp() {
  const [showA, setShowA] = useState(true);
 return (
    <div>
      <button onClick={() => setShowA(!showA)}>
        {showA ? "Show Component B" : "Show Component A"}
      </button>
      
      {showA ? <ComponentA /> : <ComponentB />}
    </div>
  );
}
export default ToggleComp;
