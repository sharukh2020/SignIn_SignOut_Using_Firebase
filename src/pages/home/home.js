import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { currentUserData, currentUserNoData } from '../../appState/action';
import classes from "./home.module.css";
import UserDataForm from './userDataForm/userDataForm';
import { getUserData } from './getUserData/getUserData';
import UserDetails from './showUserDetails/showUserDetails';
import { userDataSubmit } from './userDataSubmit/userDataSubmit';

function Home() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginState);
  const { uid } = loginState
  const userDataState = useSelector((state) => state.userDataState)
  const { loading } = userDataState
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    mobileNumber: "",
    gender: "",
    occupation: ""

  })
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    userDataSubmit(e, db, setDoc, doc, uid, userData, dispatch, currentUserData)
  }

  function craetePostLoadingUI() {
    if (userDataState.name) {
      return (<UserDetails userData={userDataState} />)
    }
    else {
      return (
        <UserDataForm
          userData={userData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )
    }

  }

  const postLoadingUI = craetePostLoadingUI()

  const getCurrentUserData = () => {
    getUserData(db, getDoc, doc, uid, dispatch, currentUserData, currentUserNoData)
  }

  useEffect(() => {
    if (loading) {
      getCurrentUserData()
    }
  }, [])

  return (
    <div
      className={classes.homepage}
    >
      {
        loading ? <h1 className={classes.loadingText}>... Loading</h1> : postLoadingUI
      }
    </div>
  );
}

export default Home;
