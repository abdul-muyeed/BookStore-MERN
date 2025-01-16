const getImgUrl = (img) => {
    return new URL(`/src/assets/books/${img}`, import.meta.url).href;
}

export { getImgUrl };