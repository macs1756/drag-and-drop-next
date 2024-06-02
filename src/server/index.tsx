import { faker } from "@faker-js/faker";


export interface Itodo {
  order?: number;
  description: string
}


export function createRandomItodo(): Itodo {
  return {
    description: faker.lorem.sentence()
  };
}

export const TODOexecute: Itodo[] = faker.helpers.multiple(createRandomItodo, {
  count: 5,
});
