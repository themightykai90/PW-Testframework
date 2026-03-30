import { faker } from '@faker-js/faker';

faker.seed(20260330);

export type ProductQueryParams = {
    limit: number;
    skip: number;
    q: string;
};

export function buildProductQueryParams(): ProductQueryParams {
    return {
        limit: faker.number.int({ min: 1, max: 20 }),
        skip: faker.number.int({ min: 0, max: 10 }),
        q: faker.commerce.productName().split(' ')[0],
    };
}

export function randomProductId(): number {
    return faker.number.int({ min: 1, max: 100 });
}
