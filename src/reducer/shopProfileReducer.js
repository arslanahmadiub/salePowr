import companyLogo from "../assets/images/dummyLogo.png";

const initalState = {
  shopPreview: {
    logo: companyLogo,
    name: "GoPare",
    brief: "Irure enimIrure enim ullamco exercitation incididunt.",
    social: { fb: "arslanahmadiub", ig: "arslanahmadiub", wp: "", tt: "" },
    contacts: {
      phone: 123456780,
      email: "someone@exmaple.com",
      address: "some business location, midtown ave.",
    },
    description: "Electronics",
    shopId: "#345244",
  },
  preview: false,
  shopData: {},
  formData: false,
  filePicker: false,
  loadingDialog: false,
};

export const shopProfileReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SHOP_PREVIEW":
      return {
        ...state,
        shopPreview: action.payload,
      };
    case "SHOP_PREVIEW_DIALOG":
      return {
        ...state,
        preview: action.payload,
      };
    case "SAVE_SHOP_DATA":
      return {
        ...state,
        shopData: action.payload,
      };
    case "CLEAR_FORM_DATA":
      return {
        ...state,
        formData: action.payload,
      };
    case "CLEAR_FILE_PICKER":
      return {
        ...state,
        filePicker: action.payload,
      };
    case "SHOW_LOADING_DIALOG":
      return {
        ...state,
        loadingDialog: action.payload,
      };
    default:
      return state;
  }
};
