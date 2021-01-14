const initalState = {
  card: [],
};

export const walletReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_WALLET_CARD":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    case "FETCH_WELLET_CARD":
      return {
        ...state,
        card: action.payload,
      };
    case "RESET":
      return initalState;
    default:
      return state;
  }
};
