const initialLoginState = {
  loading: true,
  login: false,
  uid: null
};

const userLoginStatusReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { loading: false, login: true, uid: action.uid };
    case "LOGGED_OUT":
      return { loading: false, login: false, uid: null };
    default:
      return state;
  }
};

const initialDataState = {
  loading: true
};
const userDataStatusReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return { loading: false, ...action.userData };
    case "USER_NO_DATA":
      return { loading: false };
    case "NO_USER_NO_DATA":
      return { loading: true };
    default:
      return state;
  }
}

const initialSidebarAnimtionState = {
  animation: "noAnimation"
};
const SidebarAnimationStatusReducer = (state = initialSidebarAnimtionState, action) => {
  switch (action.type) {
    case "NO_ANIMATION":
      return { animation: "noAnimation" };
    case "OPEN_ANIMATION":
      return { animation: "openAnimation" };
    case "CLOSE_ANIMATION":
      return { animation: "closeAnimation" };
    default:
      return state;
  }
}

export { userLoginStatusReducer, userDataStatusReducer, SidebarAnimationStatusReducer };
