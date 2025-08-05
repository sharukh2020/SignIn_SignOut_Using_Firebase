import Input from "../../../myLibrary/components/input/input"
import classes from "./userDataForm.module.css"

function UserDataForm({ userData, handleSubmit, handleChange }) {
    const commonProps = {
        handleOnChange: e => handleChange(e),
        required: true,
        customClasses: [classes.userDataInputs]
    }
    return (
        <form
            className={classes.userDataForm}
            onSubmit={(e) => handleSubmit(e)}
        >
            <div
                className={classes.userDataFormHeading}
            >
                Please enter your details
            </div>
            <Input
                name="name"
                placeholder='Name'
                type='text'
                value={userData.name}
                {...commonProps}
            />
            <Input
                name="gender"
                placeholder='Gender'
                type='text'
                value={userData.gender}
                {...commonProps}
            />
            <Input
                name="age"
                placeholder='Age'
                type='number'
                value={userData.age}
                {...commonProps}
            />
            <Input
                name="mobileNumber"
                placeholder='Mobile Number'
                type='tel'
                value={userData.mobileNumber}
                {...commonProps}
            />
            <Input
                name="occupation"
                placeholder='Occupation'
                type='text'
                value={userData.occupation}
                {...commonProps}
            />
            <input
                className={classes.userDataSubmit}
                type='submit'
                value="Submit" />
        </form>)
}

export default UserDataForm