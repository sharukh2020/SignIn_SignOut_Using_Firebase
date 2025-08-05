import { onAuthStateChanged } from 'firebase/auth';
import { currentNoUserNoData, loggedIn, loggedOut } from '../appState/action';
import { auth } from '../firebase/firebase';


function LoginStateHandler(dispatch) {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setTimeout(() => {
                dispatch(loggedIn(currentUser.uid));
            }, 500);
        } else {
            setTimeout(() => {
                dispatch(loggedOut());
                dispatch(currentNoUserNoData());
            }, 500);

        }
    });

    return unsubscribe;
}


export { LoginStateHandler };
