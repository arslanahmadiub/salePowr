export const phoneSaveAction = (data) => {
  return {
    type: "SAVE_MOBILE_NUMBER",
    payload: data,
  };
};

export const profileDialogAction = (data) => {
  return {
    type: "SHOW_PROFILE_DIALOG",
    payload: data,
  };
};
