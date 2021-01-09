const initalState = {
  phoneNumber: {},
  profileDialog: false,
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SAVE_MOBILE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "SHOW_PROFILE_DIALOG":
      return {
        ...state,
        profileDialog: action.payload,
      };

    default:
      return state;
  }
};
