const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCart = (id) => {
    return {
        type: 'ADD_CART',
        payload: id
    };
};

const deleteFromCart = (id) => {
    return {
        type: 'REMOVE_CART',
        payload: id
    };
};

const dataСlean = () => ({type: 'DATA_CLEAN'})

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    dataСlean
};