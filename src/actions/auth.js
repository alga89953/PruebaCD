import { types } from "../types/types";
import { finishLoading, setError, startLoading } from "./ui";
// Importa directamente el objeto 'auth' que ya inicializaste y exportaste en firebaseConfig.js
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const login = (uid, email) => ({
    type: types.login,
    payload: {
        uid,
        email
    }
});

export const logout = () => ({
    type: types.logout
});

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.email));
                dispatch(finishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading());
                dispatch(setError("Error, los datos ingresados son incorrectos"))
            });
    };
};

export const startLogout = () => {
    return async(dispatch) => {
        await signOut(auth);
        dispatch(logout());
    };
};
