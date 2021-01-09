const initalState = {
  profileDataLoading: false,
  profileDataSaveLoading: false,
};

export const dashboardReducer = (state = initalState, action) => {
  switch (action.type) {
    case "PROFILE_INFO_LOADING":
      return {
        ...state,
        profileDataLoading: action.payload,
      };
    case "PROFILE_INFO_SAVE_LOADING":
      return {
        ...state,
        profileDataSaveLoading: action.payload,
      };

    default:
      return state;
  }
};
