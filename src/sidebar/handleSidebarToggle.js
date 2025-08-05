import { closeAnimation, noAnimation, openAnimation } from "../appState/action";

function sidebarAnimationHandler(sidebarAnimation, dispatch) {
    switch (sidebarAnimation) {
        case "noAnimation":
            dispatch(openAnimation())
            break;
        case "openAnimation":
            dispatch(closeAnimation())
            setTimeout(() => {
                dispatch(noAnimation())
            }, 500)
            break;
        default:
            break;
    }

};

export { sidebarAnimationHandler }