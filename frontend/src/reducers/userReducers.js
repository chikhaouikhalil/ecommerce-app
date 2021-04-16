//user login reducer
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN-REQUEST":
      return { loading: true };
    case "USER_LOGIN-SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN-FAIL":
      return { loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};
