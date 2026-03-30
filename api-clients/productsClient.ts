import { APIRequestContext, expect } from '@playwright/test';

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
};

export class ProductsClient {
    constructor(private readonly request: APIRequestContext) {}

    async getProductById(productId: number): Promise<Product> {
        const response = await this.request.get(`/products/${productId}`);
        expect(response.ok()).toBeTruthy();
        return response.json();
    }

    async searchProducts(query: string, limit = 10, skip = 0): Promise<{ products: Product[]; total: number }> {
        const response = await this.request.get('/products/search', {
            params: {
                q: query,
                limit,
                skip,
            },
        });

        expect(response.ok()).toBeTruthy();
        return response.json();
    }
}
