import ProductsList from "@/app/products/product-list";
import { PRODUCTS_CONST } from "@/constants/app-constants";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockProducts, mockSearchProduct } from "../../__fixtures__/products";
import userEvent from "@testing-library/user-event";

describe("Products Page", () => {

   const products = mockProducts(5);

  const renderComponent = () => {
    render(<ProductsList products={products} />);
  };

  it("should render products page title", () => {
    renderComponent();

    const title = screen.getByText(PRODUCTS_CONST.PRODUCTS);

    expect(title).toBeDefined();
  });

  it("should render all mocked products", () => {
    renderComponent();

   products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
    });
  });

  it("should render search input", async () => {
    renderComponent();

    const searchInput = screen.getByPlaceholderText(
      PRODUCTS_CONST.SEARCH_PRODUCTS
    );

    expect(searchInput).toBeInTheDocument();

    const searchProduct = mockSearchProduct;

    await userEvent.type(searchInput, searchProduct);

    expect(searchInput).toHaveValue(searchProduct);
  });
});
