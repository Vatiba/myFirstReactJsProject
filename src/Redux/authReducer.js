import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";
import { setTimeOutApp } from './appReducer';

const SET_AUTH_USER_DATA = "auth/FOLLOW";

let initialState = {
	authUserId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};

export const setAuthUserData = (authUserId, login, email, isAuth) => {
	return {
		type: SET_AUTH_USER_DATA,
		payload: { authUserId, login, email, isAuth },
	};
};

export const getAuth = () => async (dispatch) => {
	try {
		let response = await AuthAPI.getAuth();
		if (response.data.resultCode === 0) {
			let { id, login, email } = response.data.data;
			dispatch(setAuthUserData(id, login, email, true));
		}
		dispatch(setTimeOutApp(false));
	} catch (err) {
		dispatch(setTimeOutApp(true));
	}
};

export const login = (email, password, rememberMe) => async (dispatch) => {
	try {
		let response = await AuthAPI.login(email, password, rememberMe);
		if (response.data.resultCode === 0) {
			dispatch(getAuth());
		} else {
			let message = response.data.messages
				? response.data.messages[0]
				: "Some error";
			dispatch(stopSubmit("login", { _error: message }));
		}
		dispatch(setTimeOutApp(false));
	}
	catch {
		dispatch(setTimeOutApp(true));
	}
}

export const logout = () => async (dispatch) => {
	try {
		let response = await AuthAPI.logout()
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
		dispatch(setTimeOutApp(false));
	}
	catch {
		dispatch(setTimeOutApp(true));
	}
};

export default authReducer;
