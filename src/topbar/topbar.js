import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import classes from "./topbar.module.css";
import { sidebarAnimationHandler } from "../sidebar/handleSidebarToggle";
import { handleSidebarOnOutsideClicks } from "../sidebar/handleOnOutsideClicks";
import { preLoginRightPortion } from "./preLoginRightPortion";

export default function Topbar() {
    const loginState = useSelector((state) => state.loginState);
    const { loading, login } = loginState
    const sidebarAnimationState = useSelector((state) => state.sidebarAnimationState.animation);
    const dispatch = useDispatch();
    const location = useLocation();
    const profileMenuRef = useRef(null);
    const sidebarTogglerRef = useRef(null);
    const [profileMenuShow, setProfileMenuShow] = useState(false);
    const [preLoginRightPortionData, setPreLoginRightPortionData] = useState({
        query: "",
        redirectToPage: "",
        redirectRoute: ""
    });

    const handleLogout = () => {
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                alert("Sign out Successful")
                // console.log("Sign out Successful");
            })
            .catch((error) => {
                error ? alert(error.message) : alert("Sorry, Something Went Wrong")
                // console.error("Error during sign out:", error);
            });
    };

    const handleProfileMenuToggle = (e) => {
        e.stopPropagation();
        setProfileMenuShow((prev) => !prev);
    };

    const handleSidebarToggle = (e) => {
        e.stopPropagation();
        sidebarAnimationHandler(sidebarAnimationState, dispatch);
    };

    function createTopbarLogo() {
        return (
            login
                ?
                <div className={classes.logoPostLogin}>TechGemz</div>
                :
                <div className={classes.logoPreLogin}>TechGemz</div>)
    }

    function createSidebarToggler() {
        return (
            login && (
                <div
                    className={classes.sidebarToggler}
                    ref={sidebarTogglerRef}
                    onClick={handleSidebarToggle}
                >
                    =
                </div>
            )
        )
    }

    function createTopbarRightSectionPostLogin() {
        return (<div className={classes.topbarRightPortionPostLogin}>
            <div
                className={classes.userAvatar}
                ref={profileMenuRef}
                onClick={handleProfileMenuToggle}
            >
                <div>
                    S
                </div>
                <div
                    className={
                        profileMenuShow
                            ? classes.profileMenuShow
                            : classes.profileMenuHide
                    }
                >
                    <div>
                        <Link to="/accountSettings">
                            Account Settings
                        </Link>
                    </div>
                    <div onClick={handleLogout}>Sign Out</div>
                </div>
            </div>
        </div>)
    }

    function createTopbarPreLoginRightQuestionSection() {
        return (
            <div className={classes.topbarPreLoginRightQuestionSection}>
                <div>
                    {preLoginRightPortionData.query}
                </div>
                <Link
                    to={preLoginRightPortionData.redirectRoute}
                >
                    {preLoginRightPortionData.redirectToPage}
                </Link>
            </div>
        )
    }

    function createTopbarRightSection() {
        const topbarRightSectionPostLogin = createTopbarRightSectionPostLogin()
        const topbarPreLoginRightQuestionSection = createTopbarPreLoginRightQuestionSection()
        return (
            login
                ?
                topbarRightSectionPostLogin
                :
                topbarPreLoginRightQuestionSection
        )

    }

    const topbarLogo = createTopbarLogo()
    const sidebarToggler = createSidebarToggler()
    const topbarRightSection = createTopbarRightSection()

    useEffect(() => {
        preLoginRightPortion(location, setPreLoginRightPortionData)
    }, [location.pathname]);

    useEffect(() => {
        const OutsideSidebarClicks = (e) => {
            handleSidebarOnOutsideClicks(e, sidebarAnimationState, dispatch, sidebarTogglerRef, profileMenuRef, setProfileMenuShow)
        }
        document.addEventListener("click", OutsideSidebarClicks, true);

        return () => document.removeEventListener("click", OutsideSidebarClicks, true);

    }, [sidebarAnimationState]);


    return (
        <div className={loading ? classes.topbarHide : classes.topbar}>
            {
                topbarLogo
            }
            {
                sidebarToggler
            }
            {
                topbarRightSection
            }

        </div>
    );
}
