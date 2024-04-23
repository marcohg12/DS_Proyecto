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
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import CartView from "../CartView";
import { BACKEND_ROUTE } from "../../scripts/constants";
import {
  axiosStubGetIncreaseProductErrorEqualToFalse,
  axiosStubGetWithErrorEqualToFalse,
  axiosStubGetWithErrorEqualToTrue,
  testingSomethingFunney,
} from "./BackEndStub"; // Import helper functions

jest.mock("axios");
describe("CartView component", () => {
  beforeEach(() => {
    jest.restoreAllMocks(); // Ensure axios mocks are cleared before each test
  });
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
  it("Doesn't render the accumulated price of each product based on units and individual price when there is a backend error", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartView />);
    });
    // Debugging

    //screen.debug();
    expect(screen.queryByText("₡50")).toBeNull();
    expect(screen.queryByText("₡40")).toBeNull();
  });

  //Test Case id 9
  it("The component reloads itself with the new quantity of a product", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartView />);
    });

    //Mock de la funcion reload de la pantalla
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { reload: jest.fn() },
    });
    await act(async () => {
      axiosStubGetIncreaseProductErrorEqualToFalse();
      const increaseButton = await screen.getAllByText("+")[1];
      fireEvent.click(increaseButton);
      //AXIOS.get != axios, en este se hace con el segundo
      //expect(axios).toBeCalledTimes(1);
    });
    //Para verificar que se volvio a recargar la ventana despues de hacer el incremento
    expect(window.location.reload).toHaveBeenCalled();
  });
});
