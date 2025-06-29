import { getProducts } from "@/services/products-service";
import { mockProducts } from "../__fixtures__/products";
import { API_URLS } from "@/constants/api-urls";
import { PRODUCTS_ERROR } from "@/constants/service-constants";

global.fetch = jest.fn();

describe("ProductsService", () => {
  it("should fetch products", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockProducts,
    });

    await getProducts();
    expect(fetch).toHaveBeenCalledWith(API_URLS.PRODUCTS_URL);
  });

  it("should throw an error if fetch fails", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error(PRODUCTS_ERROR));

    await expect(getProducts()).rejects.toThrow(PRODUCTS_ERROR);
  });
});
