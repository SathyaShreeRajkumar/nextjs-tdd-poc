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

  const [product] = mockProducts(1);
  const renderComponent = () => {
    render(<ProductDetails product={product} />);
  };

  it("should render all product details correctly", () => {
    renderComponent();

    expect(screen.getByText(product.name)).toBeInTheDocument();

    expect(
      screen.getByText(`${PRODUCTS_CONST.MODELS} ${product.model}`)
    ).toBeInTheDocument();

    expect(screen.getByText(product.description)).toBeInTheDocument();

    expect(
      screen.getByText(`${PRODUCTS_CONST.PRICE} ${product.price}`)
    ).toBeInTheDocument();
  });

  it("should render product specifications correctly", () => {
    renderComponent();

    expect(screen.getByText(PRODUCTS_CONST.SPECIFICATIONS)).toBeInTheDocument();

    Object.entries(product.specs).forEach(([key, value]) => {
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
      `${FAVOURITE_BUTTON_TEST_ID}-${product.id}`
    );

    expect(favoriteButton).toBeInTheDocument();

    await userEvent.click(favoriteButton);

    expect(mockProductContext.addToFavorites).toHaveBeenCalledWith(product);
  });

  it("should remove from favorites when product is already a favorite", async () => {
    (useProductContext as jest.Mock).mockReturnValue({
      favorites: [product], 
      addToFavorites: mockProductContext.addToFavorites,
      removeFromFavorites: mockProductContext.removeFromFavorites,
    });

    renderComponent();

    const favoriteButton = screen.getByTestId(`${FAVOURITE_BUTTON_TEST_ID}-${product.id}`);
    expect(favoriteButton).toBeInTheDocument();

    await userEvent.click(favoriteButton);

    expect(mockProductContext.removeFromFavorites).toHaveBeenCalledWith(product.id);
  });
});
