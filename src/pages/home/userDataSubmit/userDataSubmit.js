const userDataSubmit = async (e, db, setDoc, doc, uid, userData, dispatch, currentUserData) => {
  e.preventDefault()
  try {
    await setDoc(doc(db, "users", uid), {
      ...userData,
      uid: uid,
      createdAt: new Date()
    });
    // console.log("User data is successfully saved in Firestore!");
    dispatch(currentUserData({
      ...userData,
      uid: uid,
      createdAt: new Date()
    }));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export { userDataSubmit }