import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this line to extend Jest matchers
import CartPayment from "../CartPayment";
import MessageModal from "../../components/MessageModal";
import {
  axiosStubGetWithErrorEqualToFalse,
  axiosStubGetWithErrorEqualToTrue,
  axiosStubSendFormErrorEqualToFalse,
} from "./BackEndStub";
import axios from "axios";
jest.mock("axios");
jest.mock("../../components/MessageModal");
jest.useFakeTimers();
describe("Cart payment component", () => {
  beforeEach(() => {
    jest.restoreAllMocks(); // Ensure axios mocks are cleared before each test
    MessageModal.mockImplementation(
      jest.requireActual("../../components/MessageModal").default
    );
  });

  //Test case 20
  it("Renders name of each product correctly in the component", async () => {
    axiosStubGetWithErrorEqualToFalse();

    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });

  //Test case 21
  it("Renders units of each product correctly in the component", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText(/Unidades: 5/)).toBeInTheDocument();
    expect(screen.getByText(/Unidades: 2/)).toBeInTheDocument();
  });

  //Test case 22
  it("Renders the accumulated price of each product based on units and individual price", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText(/Subtotal: ₡50/)).toBeInTheDocument();
    expect(screen.getByText(/Subtotal: ₡40/)).toBeInTheDocument();
  });

  //Test case 23
  it("when the component renders, the provinces are present in it for the user to select. ", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText("Alajuela")).toBeInTheDocument();
    expect(screen.getByText("San José")).toBeInTheDocument();
    expect(screen.getByText("Cartago")).toBeInTheDocument();
    expect(screen.getByText("Heredia")).toBeInTheDocument();
    expect(screen.getByText("Guanacaste")).toBeInTheDocument();
    expect(screen.getByText("Limón")).toBeInTheDocument();
    expect(screen.getByText("Puntarenas")).toBeInTheDocument();
  });

  //Test case 24
  it("Doesn't render the names of the products when there was an error on the back", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.queryByText(/Product 1/i)).toBeNull();
    expect(screen.queryByText(/Product 2/i)).toBeNull();
  });

  //Test case 25
  it("Doesn't render units of each product when there was an error on the back", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.queryByText(/Unidades: 5/)).toBeNull();
    expect(screen.queryByText(/Unidades: 2/)).toBeNull();
  });

  //Test case 26
  it("Doesn't render the accumulated price of each product based on units and individual price when there is a backend error", async () => {
    axiosStubGetWithErrorEqualToTrue();
    await act(async () => {
      render(<CartPayment />);
    });
    // Debugging

    //screen.debug();
    expect(screen.queryByText(/Subtotal: ₡50/)).toBeNull();
    expect(screen.queryByText(/Subtotal: ₡40/)).toBeNull();
  });

  //Test Case 27
  it("Renders the total price of the cart without the delivery fee", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.getByText(/Precio del carrito: ₡90/)).toBeInTheDocument();
  });

  //Test Case 28
  it("Renders the total price of the cart with the delivery fee", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    //screen.debug();
    expect(screen.queryByText(/Precio con envío: ₡3,090/)).toBeInTheDocument();
  });

  //Test Case 29
  it("Renders the cantons correctly when selecting a province", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    await act(async () => {
      fireEvent.change(screen.getByTestId("province-select"), {
        target: { value: 0 },
      });
    });
    expect(screen.queryByText(/Curridabat/)).toBeInTheDocument();
  });

  //Test Case 30
  it("Renders the districts correctly when selecting a province", async () => {
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Debugging

    await act(async () => {
      fireEvent.change(screen.getByTestId("province-select"), {
        target: { value: 0 },
      });
    });
    await act(async () => {
      fireEvent.change(screen.getByTestId("canton-select"), {
        target: { value: 5 },
      });
    });
    expect(screen.queryByText(/Gravilias/)).toBeInTheDocument();
  });

  //Test Case 31
  it("Renders a success message after sending the form", async () => {
    MessageModal.mockImplementation(({ message, is_open, error }) => (
      <div data-testid="mock-modal" is_open={is_open.toString()}>
        {/* Render the message if there is no error */}
        {!error && <p>{message}</p>}
        {/* Render the error message if error is true */}
        {error && <p>{error.toString()}</p>}
      </div>
    ));
    axiosStubGetWithErrorEqualToFalse();
    await act(async () => {
      render(<CartPayment />);
    });

    // Mock user input
    await act(async () => {
      axiosStubSendFormErrorEqualToFalse();
      fireEvent.change(screen.getByTestId("province-select"), {
        target: { value: "1" },
      });
      fireEvent.change(screen.getByTestId("canton-select"), {
        target: { value: "41" },
      });
      fireEvent.change(screen.getByTestId("district-select"), {
        target: { value: "235" },
      });
      fireEvent.change(screen.getByTestId("input-details"), {
        target: { value: "123 Main St" },
      });
      fireEvent.change(screen.getByTestId("input-files"), {
        target: {
          files: [new File(["photo"], "photo.jpg", { type: "image/jpeg" })],
        },
      });
      // Submit form
      //fireEvent.submit(screen.getByRole("button", { name: "Confirmar" }));
      fireEvent.submit(screen.getByTestId("paymentForm"));
    });
    expect(
      screen.getByText("Pedido generado exitosamente")
    ).toBeInTheDocument();
  });
});
