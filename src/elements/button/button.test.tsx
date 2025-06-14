import { render, screen } from "@testing-library/react";
import { Button } from "./main";

test("renders Button component", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});
