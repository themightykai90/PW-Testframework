import { test, expect } from '@playwright/test';
import { z } from 'zod';
import { ProductsClient } from '../../api-clients/productsClient';
import { buildProductQueryParams, randomProductId } from '../../fixtures/dataFactory';

const productSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
});

test.describe('Products API', () => {
    test('Get product by id returns valid schema @api @smoke', async ({ request }) => {
        const client = new ProductsClient(request);
        const productId = randomProductId();

        const product = await client.getProductById(productId);
        const parsed = productSchema.safeParse(product);

        expect(parsed.success).toBeTruthy();
    });

    test('Search products returns bounded list @api', async ({ request }) => {
        const client = new ProductsClient(request);
        const params = buildProductQueryParams();

        const response = await client.searchProducts(params.q, params.limit, params.skip);

        expect(Array.isArray(response.products)).toBeTruthy();
        expect(response.products.length).toBeLessThanOrEqual(params.limit);
        expect(response.total).toBeGreaterThanOrEqual(0);
    });
});
