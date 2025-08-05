import { useState } from "react";
import classes from "./signin.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Input from "../../myLibrary/components/input/input";

export default function SignInPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            userCredential && alert(`Sign in Successfull`)
            // console.log("User signed in:", userCredential.user);
        } catch (error) {
            if (error.message == "Firebase: Error (auth/invalid-credential).") {
                alert("Invalid Credentials")
            }
            else {
                alert("Sorry, Something Went Wrong")
            }
            // console.log("Error signing in:", error.message);
        }
    };
    const commonProps = {
        handleOnChange: handleChange,
        customClasses: classes.formInputs,
        required: true
    }

    return (
        <div className={classes.signInPage}>
            <form onSubmit={handleSubmit} className={classes.signInForm}>
                <div className={classes.formHeading}>Sign In</div>
                <div className={classes.signUpLink}>
                    <div>
                        Not yet registered?
                    </div>
                    <Link to="/signUp">
                        Sign Up
                    </Link>
                </div>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    {...commonProps}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    {...commonProps}
                />
                <input
                    className={classes.formSubmitButton}
                    type="submit"
                    value="Sign In"
                />
            </form>
        </div>
    );
}
