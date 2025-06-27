import ProductsPage from "@/app/products/page";
import { PRODUCTS_CONST } from "@/constants/app-constants";
import productsJson from "@/data/products.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Products Page", () => {
  const renderComponent = () => {
    render(<ProductsPage />);
  };

  it("should render products page title", () => {
    renderComponent();

    const title = screen.getByText(PRODUCTS_CONST.PRODUCTS);

    expect(title).toBeDefined();
  });

  it("should render all mocked products", () => {
    renderComponent();

    productsJson.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
    });
  });
});
