import { faker } from "@faker-js/faker";

export const mockContactForm = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  message: faker.lorem.paragraph(),
};
