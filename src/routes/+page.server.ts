import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {

    const response = await fetch("https://fakestoreapi.com/products?limit=3");

    const products: Array<Product> = await response.json();

    return { products };
}) satisfies PageServerLoad;