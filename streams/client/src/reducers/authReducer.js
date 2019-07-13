import { SIGN_OUT, SIGN_IN } from '../actions/types.js';
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}
export default (state = INITIAL_STATE, action) => {
    console.log("auth Reducers " + action.type);
    switch (action.type) {
    case SIGN_IN:
	return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
	return { ...state, isSignedIn: false, userId: null };
    default:
	return state;
    }
};
