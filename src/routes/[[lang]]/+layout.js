/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
	return {
		lang: params.lang
	};
}