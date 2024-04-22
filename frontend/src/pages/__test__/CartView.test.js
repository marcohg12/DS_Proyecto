// CartPayment.test.js

import React from "react";
import {
  render,
  waitFor,
  screen,
  act,
  getByText,
  findByText,
  queryAllByDisplayValue,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Axios from "axios";
import CartView from "../CartView";
import {
  axiosStubGetWithErrorEqualToFalse,
  axiosStubGetWithErrorEqualToTrue,
} from "./BackEndStub"; // Import helper functions

describe("CartView component", () => {
  //Test Case ID 1
  it("Renders name of each product correctly in the component", async () => {
    axiosStubGetWithErrorEqualToFalse();

    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
  //Test Case ID 2
  it("Renders units of each product correctly in the component", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });

  //Test case ID 3
  it("Renders the price of each individual product", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText("₡10")).toBeInTheDocument();
    expect(screen.getByText("₡20")).toBeInTheDocument();
  });

  //Test Case id 4
  it("Renders the acumulated price of each product based on units and individual price", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText("₡50")).toBeInTheDocument();
    expect(screen.getByText("₡40")).toBeInTheDocument();
  });

  //Test case id 5
  it("Doesn't render the names of the products when there was an error on the back", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    expect(screen.queryByText("Product 1")).toBeNull();
    expect(screen.queryByText("Product 2")).toBeNull();
  });

  //Test Case ID 6
  it("Doesn't render units of each product when there was an error on the back", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    const inputElements = screen.queryAllByRole("input");
    expect(inputElements.length).toBe(0);
  });

  //Test case ID 7
  it("Doesn't render the price of each individual product when there was an error in the back", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    expect(screen.queryByText("₡10")).toBeNull();
    expect(screen.queryByText("₡20")).toBeNull();
  });

  //Test Case id 8
  it("Doesn't render the acumulated price of each product based on units and individual price when there is a backend error", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartView />);
    });

    // Debugging

    //screen.debug();
    expect(screen.queryByText("₡50")).toBeNull();
    expect(screen.queryByText("₡40")).toBeNull();
  });
});
