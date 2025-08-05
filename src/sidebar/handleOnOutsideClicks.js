import { sidebarAnimationHandler } from "./handleSidebarToggle";

const handleSidebarOnOutsideClicks = (e, sidebarAnimation, dispatch, sidebarTogglerRef, profileMenuRef, setProfileIconMenu) => {
    if (
        sidebarTogglerRef.current &&
        !sidebarTogglerRef.current.contains(e.target) &&
        sidebarAnimation === "openAnimation"
    ) {
        sidebarAnimationHandler(sidebarAnimation, dispatch);
    }

    if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
    ) {
        setProfileIconMenu(false);
    }
};

export { handleSidebarOnOutsideClicks }