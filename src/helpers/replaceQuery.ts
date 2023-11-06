import { browser } from "$app/environment";
import { page } from "$app/stores";
import { get } from 'svelte/store'

export const replaceQuery = (values: Record<string, string | null>) => {
    if (browser) {
        for (const [k, v] of Object.entries(values)) {
            if (v) {
                get(page).url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
            } else {
                get(page).url.searchParams.delete(k);
            }
        }
        
        return get(page).url.href
    }
    return ''
};
