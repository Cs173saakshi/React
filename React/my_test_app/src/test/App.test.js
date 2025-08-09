import { render,screen } from "@testing-library/react";
import App from './App';

test('renders App Component',()=>{
  render(<App/>);
  const headingElement=screen.getByText(/React with Testing:/i);
  expect(headingElement).toBeInTheDocument();
})