import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

test("Counter Component Working Properly", () => {
  render(<Counter />);

  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);

  const updatedCount = screen.getByText(/You Clicked Button 10 Times./i);
  expect(updatedCount).toBeInTheDocument();
});

test("Checking Button Functionality", async () => {
  render(<Counter />);

  expect(screen.getByText(/You Clicked Button 0 Times./i)).toBeInTheDocument();

  const buttonElement = screen.getByRole("button", { name: /Click Me/i });
  await userEvent.click(buttonElement);

  expect(screen.getByText(/You Clicked Button 1 Times./i)).toBeInTheDocument();
});
