const initalState = {
  logo: [],
  logoFile: [],
};

export const logoImageReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_LOGO":
      return {
        ...state,
        logo: action.payload,
      };
    case "SET_LOGO_FILE":
      return {
        ...state,
        logoFile: action.payload,
      };

    default:
      return state;
  }
};
