import { render, screen } from "@testing-library/react";
import { Button } from "..";
import { ICArrow } from "../../../assets";

describe("Testing Component Button", () => {
  it("Button Not Available", () => {
    render(<Button title="Simpan" />);
    const notif = screen.getByText(/button not available/i);
    expect(notif).toBeInTheDocument();
  });

  it("Check Title", () => {
    render(<Button type="button-icon" title="Simpan" />);
    const title = screen.getByText(/simpan/i);
    expect(title).toBeInTheDocument();
  });

  it("Check Icon And Title", () => {
    render(<Button type="button-icon" title="Next Page" icon={<ICArrow />} />);
    const icon = screen.getByTestId("arrow");
    const title = screen.getByText(/next page/i);
    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
