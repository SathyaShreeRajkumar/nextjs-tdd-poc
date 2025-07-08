import { getProductById, getProducts } from "@/services/products-service";
import { mockProducts } from "../__fixtures__/products";
import { API_URLS } from "@/constants/api-urls";
import { PRODUCTS_ERROR } from "@/constants/service-constants";

global.fetch = jest.fn();

describe("ProductsService", () => {
  const mockData = mockProducts(5);
  const [productItem] = mockData;

  it("should fetch products", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    await getProducts();
    expect(fetch).toHaveBeenCalledWith(API_URLS.PRODUCTS_URL);
  });

  it("should throw an error if fetch fails", async () => {
    (fetch as jest.Mock).mockResolvedValue(new Error(PRODUCTS_ERROR));

    await expect(getProducts()).rejects.toThrow(PRODUCTS_ERROR);
  });

  it("should return product data by id", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const product = await getProductById(productItem.id);

    expect(product).toEqual(productItem);
  });

  it("should throw an error if fetch fails when getting product by id", async () => {
    (fetch as jest.Mock).mockResolvedValue(new Error(PRODUCTS_ERROR));

    await expect(getProductById(productItem.id)).rejects.toThrow(
      PRODUCTS_ERROR
    );
  });
});
