import axios from "axios";

export const axiosStubGetWithErrorEqualToFalse = () => {
  const mockCartData = {
    products: [
      { _id: 1, name: "Product 1", price: 10, units: 5 },
      { _id: 2, name: "Product 2", price: 20, units: 2 },
    ],
  };
  jest.spyOn(axios, "get").mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        result: {
          products: mockCartData.products,
        },
        error: false,
      },
    })
  );
};

export const axiosStubGetWithErrorEqualToTrue = () => {
  const mockCartData = {
    products: [
      { _id: 1, name: "Product 1", price: 10, units: 5 },
      { _id: 2, name: "Product 2", price: 20, units: 2 },
    ],
  };
  jest.spyOn(axios, "get").mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        result: {
          products: mockCartData.products,
        },
        error: true,
      },
    })
  );
};

export const axiosStubGetIncreaseProductErrorEqualToFalse = () => {
  axios.mockResolvedValueOnce({
    data: { error: false, message: "Producto agregado al carrito" },
  });
};

/*export const testingSomethingFunney = () => {
  const mockCartData = {
    products: [
      { _id: 1, name: "Product 1", price: 10, units: 5 },
      { _id: 2, name: "Product 2", price: 20, units: 2 },
    ],
  };
  axios.get.mockResolvedValueOnce({
    data: {
      result: {
        products: mockCartData.products,
      },
      error: false,
    },
  });
};*/
