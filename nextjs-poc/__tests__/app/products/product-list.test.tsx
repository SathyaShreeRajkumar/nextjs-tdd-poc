import ProductsList from "@/app/products/product-list";
import { PRODUCTS_CONST } from "@/constants/app-constants";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockProducts } from "../../__fixtures__/products";

describe("Products Page", () => {
  const renderComponent = () => {
    render(<ProductsList products={mockProducts} />);
  };

  it("should render products page title", () => {
    renderComponent();

    const title = screen.getByText(PRODUCTS_CONST.PRODUCTS);

    expect(title).toBeDefined();
  });

  it("should render all mocked products", () => {
    renderComponent();

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
    });
  });
});
