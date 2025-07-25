/* import { useState } from "react";
import Counter from "./Counter";
const INITIAL_COUNT = 10;
function App() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const resetCount = () => setCount(INITIAL_COUNT);
  return (
    <div>
      <h1>Counter</h1>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        resetCount={resetCount}
      />
    </div>
  );
}
export default App;
 */

/* import React from 'react';
import FirstEvent from './FirstEvent'; // Adjust path if needed

function App() {
    return (
        <div>
            <h1>React Form Event Example</h1>
            <FirstEvent />
        </div>
    );
/* } */
/* import FirstList from "./component/FirstList"; */ 

/* import SecondList from "./component/SecondList";
import SecodList from "./component/SecondList"; */
/* 
import EmployeeList from "./component/EmployeeList"; */

/* 
 */
/* import 'bootstrap/dist/css/bootstrap.min.css'
import BootStrap from "./component/BootStrap";
function App(){
return(
  <div>
<BootStrap />
  </div>
);
}
export default App;
 */
/* import React from 'react'; */
/* import 'bootstrap/dist/css/bootstrap.min.css'
import NameList from './component/NameList';
import NameList2 from './component/NameList2';
import NameList3 from './component/NameList3';
import NameList4 from './component/NameList4';
import NameList5 from './component/NameList5'; */
/* import LifeCycleFirst from './life_cycle_component/LifeCycleFirst'; */
/* import LifecycleSecond from './component/LifeCycleSecond'; */
import LifeCycleThree from "./life_cycle_component/LifeCycleThree";
function App() {
  return (
    <div>
    {/*   <NameList />
      <NameList2 />
      <NameList3 />
      <NameList4 />
      <NameList5 /> */}
     {/*  <LifeCycleFirst /> */}
     {/*  <LifecycleSecond /> */}
     <LifeCycleThree />
    </div>
  );
}

export default App;
