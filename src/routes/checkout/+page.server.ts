import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {

    const response = await fetch(`https://api.paychangu.com/verify-payment/${url.searchParams.get("tx_ref")}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer your_secret_key"
        },
    });

    const body = await response.json();

    return {body};
}) satisfies PageServerLoad;