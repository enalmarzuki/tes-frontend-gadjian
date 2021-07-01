import { render, screen } from "@testing-library/react";
import { Card } from "..";
import { DummyPhotoProfile } from "../../../assets";

const data = {
  id: {
    value: 123456,
  },
  picture: {
    large: DummyPhotoProfile,
  },
  name: {
    first: "Enal",
    last: "Marzuki",
  },
  phone: "081375697234",
  dob: {
    date: "2021-12-02",
  },
  email: "testing@test.com",
};

describe("Testing Component Card", () => {
  it("Input Not Available", () => {
    render(<Card data={data} />);

    const personnelID = screen.getByText(/123456/);
    expect(personnelID).toBeInTheDocument();

    const name = screen.getByText(/Enal Marzuki/);
    expect(name).toBeInTheDocument();

    const telephone = screen.getByText(/081375697234/);
    expect(telephone).toBeInTheDocument();

    const birthday = screen.getByText(/02-12/);
    expect(birthday).toBeInTheDocument();

    const email = screen.getByText(/testing@test.com/);
    expect(email).toBeInTheDocument();
  });
});
