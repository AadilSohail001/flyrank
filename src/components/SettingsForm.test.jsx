import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SettingsForm from "./SettingsForm";

test("shows validation errors", async () => {
  render(<SettingsForm />);

  const button = screen.getByRole("button");

  await userEvent.click(button);

  expect(
    screen.getByText(/Name is required/i)
  ).toBeInTheDocument();
});

test("enables submit when valid", async () => {
  render(<SettingsForm />);

  await userEvent.type(
    screen.getByLabelText(/Name/i),
    "Aadil"
  );

  await userEvent.type(
    screen.getByLabelText(/Email/i),
    "aadil@example.com"
  );

  await userEvent.type(
    screen.getByLabelText(/Password/i),
    "password123"
  );

  expect(
    screen.getByRole("button")
  ).toBeEnabled();
});