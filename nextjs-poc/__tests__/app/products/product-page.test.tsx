import ProductsList from "@/app/products/product-list";
import { PRODUCTS_CONST } from "@/constants/app-constants";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockProducts } from "../../__fixtures__/products";

jest.mock("@/services/products-service", () => ({
  getProducts: jest.fn(() => Promise.resolve(mockProducts)),
}));

describe("Products Page", () => {
  it("renders the products list title", () => {
    render(<ProductsList products={mockProducts(5)} />);

    expect(screen.getByText(PRODUCTS_CONST.PRODUCTS)).toBeInTheDocument();
  });
});
