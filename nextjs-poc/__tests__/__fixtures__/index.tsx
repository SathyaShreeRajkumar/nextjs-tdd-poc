import { ErrorPageProps } from "@/app/error";
import { faker } from "@faker-js/faker";

export const mockErrorPageProps: ErrorPageProps = {
    error: new Error(),
    reset: jest.fn()
};

export const mockProductFormValues = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    inStock: faker.number.int({ min: 0, max: 100 }),
};

export const mockProductFormValuesNegativeStock = {
    inStock: faker.number.int({ min: -100, max: -1 }),
};