import { ProductProvider, useProductContext } from "@/context/product-context";
import { act, renderHook } from "@testing-library/react";
import { mockProducts } from "../__fixtures__/products";
import { COMMON_CONST } from "@/constants/app-constants";

describe("ProductContext", () => {

  const [product] = mockProducts(1);

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ProductProvider>{children}</ProductProvider>
  );

  it("should add product to favorites", () => {
    const { result } = renderHook(() => useProductContext(), { wrapper });

    act(() => {
      result.current.addToFavorites(product);
    });

    expect(result.current.favorites).toContainEqual(product);
  });

  it("should remove product from favorites", () => {
    const { result } = renderHook(() => useProductContext(), { wrapper });

    act(() => {
      result.current.addToFavorites(product);
      result.current.removeFromFavorites(product.id);
    });

    expect(result.current.favorites).not.toContainEqual(product);
  });

  it('should throw error if used outside of ProductProvider', () => {
    expect(() => renderHook(() => useProductContext())).toThrow(
      COMMON_CONST.CONTEXT_ERROR
    );
  });
});
