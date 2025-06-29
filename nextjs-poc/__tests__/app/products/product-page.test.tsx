import ProductsPage from "@/app/products/page";
import { PRODUCTS_CONST } from "@/constants/app-constants";
import { render, screen, waitFor } from "@testing-library/react";
import { mockProducts } from "../../__fixtures__/products";
import "@testing-library/jest-dom";

jest.mock("../../../src/services/products-service", () => ({
  getProducts: jest.fn(() => Promise.resolve(mockProducts)),
}));

describe("Products Page", () => {
  const renderComponent = () => {
    render(<ProductsPage />);
  };

  it("should render products page title", async () => {
    renderComponent();

    await waitFor(() => {
      const title = screen.findByText(PRODUCTS_CONST.PRODUCTS);

      expect(title).toBeDefined();
    });
  });
});
