import { noAnimation } from "../appState/action";

const handleSidebarOnScreenResize = (dispatch) => {
    if (window.innerWidth > 600) {
        dispatch(noAnimation())
    }
};

export { handleSidebarOnScreenResize }