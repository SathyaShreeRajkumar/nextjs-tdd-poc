import ProductDetails from "@/app/products/[id]/product-details";
import { PRODUCTS_CONST } from "@/constants/app-constants";
import { FAVOURITE_BUTTON_TEST_ID } from "@/constants/data-testid/context";
import { useProductContext } from "@/context/product-context";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockProducts } from "../../../__fixtures__/products";
import { mockProductContext } from "../../../__fixtures__/context";

jest.mock("@/context/product-context", () => ({
  useProductContext: jest.fn(() => ({
    favorites: [],
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn(),
  })),
}));

describe("ProductDetails", () => {

  const renderComponent = () => {
    render(<ProductDetails product={mockProducts[0]} />);
  };

  it("should render all product details correctly", () => {
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

  it("should render product specifications correctly", () => {
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

  it("should add product to favorites when button is clicked", async () => {
    (useProductContext as jest.Mock).mockReturnValue({
      favorites: [], 
      addToFavorites: mockProductContext.addToFavorites,
      removeFromFavorites: mockProductContext.removeFromFavorites,
    });

    renderComponent();

    const favoriteButton = screen.getByTestId(
      `${FAVOURITE_BUTTON_TEST_ID}-${mockProducts[0].id}`
    );

    expect(favoriteButton).toBeInTheDocument();

    await userEvent.click(favoriteButton);

    expect(mockProductContext.addToFavorites).toHaveBeenCalledWith(mockProducts[0]);
  });

  it("should remove from favorites when product is already a favorite", async () => {
    (useProductContext as jest.Mock).mockReturnValue({
      favorites: [mockProducts[0]], 
      addToFavorites: mockProductContext.addToFavorites,
      removeFromFavorites: mockProductContext.removeFromFavorites,
    });

    renderComponent();

    const favoriteButton = screen.getByTestId(`${FAVOURITE_BUTTON_TEST_ID}-${mockProducts[0].id}`);
    expect(favoriteButton).toBeInTheDocument();

    await userEvent.click(favoriteButton);

    expect(mockProductContext.removeFromFavorites).toHaveBeenCalledWith(mockProducts[0].id);
  });
});
