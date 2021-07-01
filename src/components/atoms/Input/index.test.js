import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "..";
import { ICSearch } from "../../../assets";

describe("Testing Component Input", () => {
  it("Input Not Available", () => {
    render(<Input icon={<ICSearch />} placeholder="Search" />);
    const notif = screen.getByText(/input not available/i);
    expect(notif).toBeInTheDocument();
  });

  it("Check Icon Input And Placeholder", () => {
    render(
      <Input type="input-icon" icon={<ICSearch />} placeholder="Search" />
    );
    const icon = screen.getByTestId("icon-search");
    const placeHolder = screen.getByPlaceholderText(/search/i);
    expect(icon).toBeInTheDocument();
    expect(placeHolder).toBeInTheDocument();
  });

  it("Check User Type", () => {
    render(
      <Input type="input-icon" icon={<ICSearch />} placeholder="Search" />
    );
    const input = screen.getByPlaceholderText("Search");
    userEvent.type(input, "Enal Marzuki");
    expect(screen.getByDisplayValue(/Enal Marzuki/)).toBeInTheDocument();
  });
});
