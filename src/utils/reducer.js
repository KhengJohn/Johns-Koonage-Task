const initialState = {
  items: [],
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ITEMS":
      return { ...state, items: action.payload };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "UPDATE_ITEM":
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, items: updatedItems };
    case "DELETE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, items: filteredItems };
    default:
      return state;
  }
}
