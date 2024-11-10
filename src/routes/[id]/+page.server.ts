import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)

    const product: Product = await response.json();

    return { product };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const price = data.get("price")?.toString();

        if (!price) {
            return fail(400, { message: "price is not defined" })
        }

        const response = await fetch("https://api.paychangu.com/payment", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer your_secret_key"
            },
            body: JSON.stringify({
                amount: Number.parseFloat(price),
                currency: "MWK",
                email: "asantikuseka@gmail.com",
                first_name: "Santinal",
                last_name: "Browns",
                callback_url: "http://localhost/checkout",
                return_url: "http://localhost/checkout",
                tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1),
                customization: {
                    title: "Test Payment",
                    description: "Payment Description",
                },
            }),
        })

        if (response.ok) {
            const json = await response.json();

            redirect(302, json.data.checkout_url)
        } else {
            console.log(await response.text())
            return fail(400, { message: "something went wrong" })
        }
    }
}