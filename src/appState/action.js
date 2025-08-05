export const loggedIn = (currentUser) => {
  return { type: "LOGGED_IN", uid: currentUser };
};

export const loggedOut = () => {
  return { type: "LOGGED_OUT" };
};

export const currentUserData = (data) => {
  return { type: "USER_DATA", userData: data };
};

export const currentUserNoData = () => {
  return { type: "USER_NO_DATA" };
};

export const currentNoUserNoData = () => {
  return { type: "NO_USER_NO_DATA" }
}

export const noAnimation = () => {
  return { type: "NO_ANIMATION" };
};

export const openAnimation = () => {
  return { type: "OPEN_ANIMATION" };
};

export const closeAnimation = () => {
  return { type: "CLOSE_ANIMATION" };
};