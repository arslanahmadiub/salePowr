export const shopProfileFetchLoading = (data) => {
  return {
    type: "PROFILE_INFO_LOADING",
    payload: data,
  };
};

export const userProfileSaveLoading = (data) => {
  return {
    type: "PROFILE_INFO_SAVE_LOADING",
    payload: data,
  };
};
