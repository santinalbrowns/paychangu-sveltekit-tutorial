// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type Product = {
		id: number,
		title: string,
		price: number,
		category: string,
		description: string,
		image: string
	}
}

export { };
