import { faker } from "@faker-js/faker";

export const mockProducts = Array.from({ length: 3 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: `$${faker.commerce.price()}`,
}));
