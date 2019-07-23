import streams from '../apis/streams';
import history from '../history';
import { SIGN_OUT, SIGN_IN, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM, } from '../actions/types.js';




export const signIn = (userId) => {
    console.log("sign in");
    return {
	type: SIGN_IN,
	payload: userId
    };
};
export const signOut = () => {
    console.log("sign out");
    return {
	type: SIGN_OUT
    };
};

export const createStream = (formValues) => async ( dispatch, getState)  => {
    console.log('create stream');
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId }) ;
    dispatch({type: CREATE_STREAM, payload: response.data });
    history.push('/');
    
};


export const fetchStreams = (formValues) => async dispatch => {
    const response = await streams.get('/streams', formValues);
    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async dispatch => {
    console.log("fexing stream" + id);
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
};

export const editStream = (id, formValues) => async dispatch => {
    console.log('edit stream' + id);
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
};

