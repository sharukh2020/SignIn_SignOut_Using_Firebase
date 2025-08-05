const getUserData = async (db, getDoc, doc, uid, dispatch, currentUserData, currentUserNoData) => {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            const data = userDoc.data()
            setTimeout(() => {
                dispatch(currentUserData(data));
            }, 250);
            // console.log("user data fetched successfully from Firestore.");

        } else {
            setTimeout(() => {
                dispatch(currentUserNoData());
            }, 250);

            // console.log("No user data found in Firestore.");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

export { getUserData }