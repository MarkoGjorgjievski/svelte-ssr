/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        category: params.category
    }
}