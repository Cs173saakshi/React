import './App.css';
// import Data from './Data';
// import PropComp from './PropComp';
/* import Button from './Button';
 */
//import Card from './Card';
//import StateComp from './StateComp';
import FormComp from './FormComp';
function App() {
  /* const handleClick = () => {
    alert("Button clicked!");
  }; */

  return (
    <div>
      <h1>React with TypeScript</h1>
      {/* <Data /> */}
      {/* <PropComp name="Saakshi" /> */}

      {/* Custom Button component */}
      {/* <Button label="Click" onClick={handleClick}  />
      <Button label="Disabled" onClick={handleClick} disabled /> */}
 {/* <Card>
      <h3>Card Title</h3>
      <p>This is a simple card with custom styles.</p>
      </Card>
       <Card style={{background:'pink',marginTop:'20px'}}>
      <h3>Styled Card</h3>
      <p>This is a card with custom styles passed via props.</p>
      </Card> */}

      {/* <StateComp /> */}
      <FormComp />
    </div>
  );
}

export default App;
