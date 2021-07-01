import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Dashboard from ".";
import { store } from "../../config/redux/store";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

describe("Testing Page Dashboard", () => {
  it("Check Url", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    );

    const pagePeronnselList = screen.getAllByTestId(/button-icon/);
    userEvent.click(pagePeronnselList[1]);

    expect(global.window.location.pathname).toEqual("/personel-list");
  });
});
