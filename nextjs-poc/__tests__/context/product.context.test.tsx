import { ProductProvider, useProductContext } from "@/context/product-context";
import { act, renderHook } from "@testing-library/react";
import { mockProducts } from "../__fixtures__/products";
import { COMMON_CONST } from "@/constants/app-constants";

describe("ProductContext", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ProductProvider>{children}</ProductProvider>
  );

  it("should add product to favorites", () => {
    const { result } = renderHook(() => useProductContext(), { wrapper });

    act(() => {
      result.current.addToFavorites(mockProducts[0]);
    });

    expect(result.current.favorites).toContainEqual(mockProducts[0]);
  });

  it("should remove product from favorites", () => {
    const { result } = renderHook(() => useProductContext(), { wrapper });

    act(() => {
      result.current.addToFavorites(mockProducts[0]);
      result.current.removeFromFavorites(mockProducts[0].id);
    });

    expect(result.current.favorites).not.toContainEqual(mockProducts[0]);
  });

  it('should throw error if used outside of ProductProvider', () => {
    expect(() => renderHook(() => useProductContext())).toThrow(
      COMMON_CONST.CONTEXT_ERROR
    );
  });
});
