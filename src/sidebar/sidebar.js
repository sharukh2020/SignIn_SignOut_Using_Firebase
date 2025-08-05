import classes from "./sidebar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
    const loginState = useSelector((state) => state.loginState);
    const { login } = loginState
    const sidebarAnimationState = useSelector((state) => state.sidebarAnimationState.animation);
    const sidebarMenuList = [
        "Home",
        "Posts",
        "Messages",
        "Likes",
        "Comments",
        "Tags",
        "Groups",
        "Pages"
    ];

    function sidebarAnimationClass() {
        if (sidebarAnimationState === "openAnimation") {
            return classes.sidebarOpen
        }
        else if (sidebarAnimationState === "closeAnimation") {
            return classes.sidebarClose
        }
        else {
            return null
        }
    }

    function sidebarClasses() {
        if (login) {
            return [classes.sidebar, sidebarAnimationClass()].join(" ")
        }
        else {
            return classes.sidebarHide
        }

    }

    const sidebarStyles = sidebarClasses()

    return (
        <div className={sidebarStyles}>
            {sidebarMenuList.map((item) => (
                <div key={item} className={classes.sidebarMenuItem}>
                    <Link to={`/${item}`}>
                        {item}
                    </Link>
                </div>
            ))}
        </div>
    );
}
