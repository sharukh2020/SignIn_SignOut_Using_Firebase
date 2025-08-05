function preLoginRightPortion(location, setPreLoginRightPortionData) {
    switch (location.pathname) {
        case "/signUp":
            setPreLoginRightPortionData({
                query: "Already have an account?",
                redirectToPage: "Sign In",
                redirectRoute: "/"
            });
            break;
        case "/":
            setPreLoginRightPortionData({
                query: "Not yet registered?",
                redirectToPage: "Sign Up",
                redirectRoute: "/signUp"
            });
            break;
        default:
            setPreLoginRightPortionData({
                query: "",
                redirectToPage: "",
                redirectRoute: ""
            });
    }
}

export { preLoginRightPortion }