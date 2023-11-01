export const replaceQuery = (values) => {
    const url = new URL(window.location.toString());
    for (let [k, v] of Object.entries(values)) {
        if (!!v) {
            url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
        } else {
            url.searchParams.delete(k);
        }
    }
    
    return url.href
};

const appendQuery = (param, value) => {
    const url = new URL(window.location.toString());
    url.searchParams.append(param, value);
    
    return url
};

// TODO: change location
export const openDialog = (value) => appendQuery('dialog', value).href