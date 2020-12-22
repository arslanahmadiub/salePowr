const initalState = {
  phoneNumber: {},
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SAVE_MOBILE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
      };

    default:
      return state;
  }
};
