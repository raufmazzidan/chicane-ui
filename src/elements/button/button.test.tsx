import { render, screen } from "@testing-library/react";
import Button from "./index";

test("renders Button component", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});
