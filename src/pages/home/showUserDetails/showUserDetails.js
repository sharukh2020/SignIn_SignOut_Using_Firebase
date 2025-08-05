import classes from "./showUserDetails.module.css"

function UserDetails({ userData }) {
    const { name, age, mobileNumber, occupation, gender, uid } = userData
    return (
        <div className={classes.userDetails}>
            <div className={classes.details}>
                <p>Your UID: <span>{uid}</span></p>
                <p>Name: <span>{name}</span></p>
                <p>Gender: <span>{gender}</span></p>
                <p>Age: <span>{age}</span></p>
                <p>Mobile Number: <span>{mobileNumber}</span></p>
                <p>Occupation: <span>{occupation}</span></p>
            </div>
        </div>
    )
}

export default UserDetails