import { render, screen } from "@testing-library/react";
import { Tags } from "./index";

describe("elements/tags", () => {
  test("render tags", async () => {
    render(<Tags label="expected-string" />);
    expect(screen.getByText("expected-string")).toBeTruthy();
  });
});
