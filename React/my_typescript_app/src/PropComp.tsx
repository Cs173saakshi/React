
interface MyProps {
  name: string;
}

//const PropComp: React.FC<MyProps> = ({ name }) => {
const PropComp=(props:MyProps)=>{
  return <h2>Hello, {props.name}!</h2>;
};

export default PropComp;
