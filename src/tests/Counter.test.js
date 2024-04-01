// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

let counterInitial;

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
  counterInitial = screen.getByTestId("count");
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  expect(counterInitial).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  const clickingPlus = screen.getByText("+");
  fireEvent.click(clickingPlus);
  expect(counterInitial).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  const clickingMinus = screen.getByText("-");
  fireEvent.click(clickingMinus);
  expect(counterInitial).toHaveTextContent("-1");
});
