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

export const TODOexecute: Itodo[] = Array.from({ length: 5 }, (_, i) => ({
  order: i + 1,
  description: faker.lorem.sentence(),
}));
