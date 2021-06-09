/* eslint-disable no-case-declarations */
const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                    loading: false,
            };
        case 'MENU_REQUSTED':
            return {
                ...state,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                loading: false,
                    error: true,
            };
        case 'ADD_CART':
            const id = action.payload;
            const item = state.menu.find((item) => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
            };

            return {
                ...state,
                items: [...state.items, newItem],
            };
        case 'REMOVE_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1),
                ],
            };
        default:
            return state;
    }
};

export default reducer;