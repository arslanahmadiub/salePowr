const initalState = {
  profileDataLoading: false,
  profileDataSaveLoading: false,
  graph: false,
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
    case "GRAPH_CALL":
      return {
        ...state,
        graph: !state.graph,
      };
    case "RESET":
      return initalState;
    default:
      return state;
  }
};
