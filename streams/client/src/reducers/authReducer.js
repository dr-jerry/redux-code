import { SIGN_OUT, SIGN_IN } from '../actions/types.js';
const INITIAL_STATE = {
    isSignedIn: null
}
export default (state = INITIAL_STATE, action) => {
    console.log("auth Reducers " + action.type);
    switch (action.type) {
    case SIGN_IN:
	return { ...state, isSignedIn: true };
    case SIGN_OUT:
	return { ...state, isSignedIn: false };
    default:
	return state;
    }
};
