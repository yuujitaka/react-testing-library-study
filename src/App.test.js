import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCameWithSpaces } from "./App";

test("button has correct color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("checkbox disables and enables button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

describe("spaces before camel-case", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCameWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCameWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCameWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
