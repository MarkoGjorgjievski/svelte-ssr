import { browser } from "$app/environment";

export const replaceQuery = (values) => {
    if (browser) {
        const url = new URL(window.location.toString());
        for (let [k, v] of Object.entries(values)) {
            if (!!v) {
                url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
            } else {
                url.searchParams.delete(k);
            }
        }
        
        return url.href
    }
};

export const findQuery = (value) => {
    if (browser) {
        const url = new URL(window.location.toString());
        return url.searchParams.get(value)
    }
}

export const appendQuery = (param, value) => {
    const url = new URL(window.location.toString());
    url.searchParams.append(param, value);
    
    return url
};

// TODO: change location
export const openDialog = (value) => appendQuery('dialog', value).href