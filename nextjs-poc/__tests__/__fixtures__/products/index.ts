import { faker } from "@faker-js/faker";

export const mockProducts = (count: number = 5) => (
  faker.helpers.multiple(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: `$${faker.commerce.price()}`,
    model: faker.commerce.productAdjective(),
    description: faker.commerce.productDescription(),
    specs: {
      processor: faker.commerce.productMaterial(),
      ram: `${faker.number.int({ min: 4, max: 64 })} GB`,
      storage: `${faker.number.int({ min: 128, max: 2048 })} GB`,
      display: `${faker.number.int({
        min: 13,
        max: 17,
      })}" ${faker.commerce.productMaterial()} Display`,
    },
  }), { count })
);

export const mockSearchProduct = faker.commerce.productName();
