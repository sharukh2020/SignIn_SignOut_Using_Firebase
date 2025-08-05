import { useState } from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../../myLibrary/components/input/input";

export default function SignUpPage() {
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
        console.log("Form Data:", formData);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            userCredential && alert("Account Created Successfully")
            // console.log("User signed up:", userCredential.user);
        } catch (error) {
            if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                alert("Email already in use")
            }
            else {
                alert("Sorry, Something Went Wrong")
            }
            // console.log("Error signing up:", error.message);

        }
    };

    const commonProps = {
        handleOnChange: handleChange,
        customClasses: classes.formInputs,
        required: true
    }

    return (
        <div className={classes.signUpPage}>
            <form onSubmit={handleSubmit} className={classes.signUpForm}>
                <div className={classes.formHeading}>Create an account</div>
                <div className={classes.signInLink}>
                    <div>
                        Already have an account?
                    </div>
                    <Link to="/">
                        Sign In
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
                    value="Sign up"
                />
            </form>
        </div>
    );
}
