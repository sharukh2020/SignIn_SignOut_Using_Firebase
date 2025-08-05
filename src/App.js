import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginStateHandler } from './loginStateHandler/loginStateHandler';
import './App.css';
import classes from './App.module.css';
import Topbar from './topbar/topbar';
import Sidebar from './sidebar/sidebar';
import { handleSidebarOnScreenResize } from './sidebar/handleOnResize';
import Routing from './routes/routes';

function App() {
  //--------App States--------------
  const loginState = useSelector((state) => state.loginState);
  const userDataState = useSelector((state) => state.userDataState)
  const sidebarAnimationState = useSelector((state) => state.sidebarAnimationState);
  console.log("LOGIN-STATE:- ", loginState)
  console.log("USER-DATA-STATE:- ", userDataState)
  console.log("SIDEBAR-ANIMATION_STATE:- ", sidebarAnimationState)
  // --------------------------------------
  const { loading, login } = loginState
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribeAuth = LoginStateHandler(dispatch);

    const handleResize = () => {
      handleSidebarOnScreenResize(dispatch);
    };

    window.addEventListener("resize", handleResize, true);

    return () => {
      window.removeEventListener("resize", handleResize, true);
      unsubscribeAuth(); // 🔄 cleanup Firebase listener
    };
  }, []);

  return (
    <BrowserRouter>
      <div className={loading ? classes.preLoadingMainContainer : classes.postLoadingMainContainer}>
        <Topbar />
        <Sidebar />
        {
          loading
            ?
            <h1 className={classes.loadingText}>... Loading</h1>
            :
            <div className={login ? classes.postLoginRouteContainer : classes.preLoginRouteContainer}>
              <Routing />
            </div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
