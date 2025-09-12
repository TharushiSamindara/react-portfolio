export const getImageUrl = (path) => {
    const baseUrl = new URL(import.meta.url).origin + "/";
    return new URL(`/assets/${path}`, baseUrl).href;
};