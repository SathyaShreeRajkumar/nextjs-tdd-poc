import ProductDetails from "@/app/products/[id]/product-details";
import { render, screen } from "@testing-library/react";
import { mockProducts } from "../../../__fixtures__/products";
import { PRODUCTS_CONST } from "@/constants/app-constants";
import "@testing-library/jest-dom";

describe("ProductDetails", () => {
  const renderComponent = () => {
    render(<ProductDetails product={mockProducts[0]} />);
  };

  test("renders all product details correctly", () => {
    renderComponent();

    const mockProduct = mockProducts[0];

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

    expect(
      screen.getByText(`${PRODUCTS_CONST.MODELS} ${mockProduct.model}`)
    ).toBeInTheDocument();

    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    
    expect(
      screen.getByText(`${PRODUCTS_CONST.PRICE} ${mockProduct.price}`)
    ).toBeInTheDocument();
  });

  test("renders product specifications correctly", () => {
    renderComponent();
    
    const mockProduct = mockProducts[0];

    expect(screen.getByText(PRODUCTS_CONST.SPECIFICATIONS)).toBeInTheDocument();

    Object.entries(mockProduct.specs).forEach(([key, value]) => {
      expect(
        screen.getByText(
          (_content, element) => element?.textContent == `${key}: ${value}`
        )
      ).toBeInTheDocument();
    });
  });
});
