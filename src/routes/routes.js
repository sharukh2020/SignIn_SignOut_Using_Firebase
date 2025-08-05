import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/home/home';
import SignUpPage from '../pages/signup/signup';
import SignInPage from '../pages/signin/signin';

function ProtectedRoute({ login, children }) {
    return login ? children : <Navigate to="/" replace />;
}

function Routing() {
    const login = useSelector((state) => state.loginState.login);

    return (
        <Routes>
            <Route
                path="/"
                element={!login ? <SignInPage /> : <Navigate to="/home" replace />}
            />
            <Route
                path="/signUp"
                element={!login ? <SignUpPage /> : <Navigate to="/home" />}
            />
            <Route
                path="/home"
                element={
                    <ProtectedRoute login={login}>
                        <Home />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
    );
}

export default Routing;
