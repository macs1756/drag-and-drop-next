import { faker } from "@faker-js/faker";

export interface Itodo {
  order?: number;
  description: string;
}

export function createRandomItodo(): Itodo {
  return {
    description: faker.lorem.sentence(),
  };
}

export const TODOexecute: Itodo[] = Array.from({ length: 12 }, (_, i) => ({
  order: i + 1,
  description: faker.lorem.sentence(),
}));

export const TODOinProccess: Itodo[] = Array.from({ length: 12 }, (_, i) => ({
  order: i + 1,
  description: faker.lorem.sentence(),
}))

export const TODOsuccess: Itodo[] = Array.from({ length: 12 }, (_, i) => ({
  order: i + 1,
  description: faker.lorem.sentence(),
}));