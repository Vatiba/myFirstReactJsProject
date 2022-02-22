import { getAuth } from "./authReducer";


const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const SET_TIME_OUT = "app/SET_TIME_OUT";

let initialState = {
	initialized: false,
	timeOut: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {
			return {
				...state,
				initialized: true,
			};
		}
		case SET_TIME_OUT: {
			return {
				...state,
				timeOut: action.timeOut,
			};
		}
		default:
			return state;
	}
};

export const initializedSuccess = () => {
	return { type: INITIALIZED_SUCCESS };
};

export const setTimeOutApp = (timeOut) => {
	return { type: SET_TIME_OUT, timeOut };
};

export const initializeApp = () => async (dispatch) => {

	let auth = await getAuth()
	await dispatch(auth);
	await dispatch(initializedSuccess());

};

export default appReducer;
