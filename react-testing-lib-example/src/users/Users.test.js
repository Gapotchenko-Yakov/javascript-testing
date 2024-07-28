import { findByText, fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import Users from "./Users";
import userEvent from "@testing-library/user-event";

import { renderWithRouter } from "../tests/helpers/renderWithRouter";

jest.mock("axios");

describe.skip("USERS TEST", () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
        },
        {
          id: 9,
          name: "Glenna Reichert",
        },
        {
          id: 10,
          name: "Clementina DuBuque",
        },
      ],
    };

    axios.get.mockReturnValue(response);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Render users list", async () => {
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(10);
    expect(axios.get).toBeCalledTimes(1);
  });

  test("Redirect to details page", async () => {
    renderWithRouter(null, "/users");
    const user = userEvent.setup();

    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(10);
    await user.click(users[0]);
    expect(screen.getByTestId("user-details-page")).toBeInTheDocument();
    screen.debug();
  });
});
