import { findByText, fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import Users from "./Users";

jest.mock("axios");

describe("USERS TEST", () => {
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
  });

  test("Render users list", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(10);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
