export const getParamsFromUrl = (url, param) => {
    const formattedUri = new URL(url);
    let params = new URLSearchParams(formattedUri.search);
    return params.get(param);
}

export const clearObject = (obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = null;
    })
    console.log(obj);
    return obj;
}