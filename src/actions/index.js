import { usersRef } from '../configs/firebase';
import { FETCH_USERS } from './types';

export const addUser = newUser => async dispatch => {
    // console.log(newUser)
    usersRef.push().set(newUser);
};

export const removeUser = removeUser => async dispatch => {
    usersRef.child(removeUser).remove();
};

export const getUsers = () => async dispatch => {
    usersRef.on("value", snapshot => {
        dispatch({
            type: FETCH_USERS,
            payload: snapshot.val()
        });
    });
};