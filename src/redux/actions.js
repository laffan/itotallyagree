import {messagesRef, usersRef} from './../firebase'

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';

export const addMessage = newMessage => async dispatch => {
  messagesRef.push().set( newMessage );
};

export const addUser = newUser => async dispatch => {
  usersRef.push().set( newUser, (err) => {
    if (err) console.log(err);
    else {
      console.log( 
        "NEW USER OBJ"
      )
      console.log(newUser)
      
      dispatch({
        type: ADD_USER,
        data: newUser
      });

    }
  } );
};

export const fetchMessages = () => async dispatch => {
  messagesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_MESSAGES,
      payload: snapshot.val()
    });
  });
};

export const fetchUsers = () => async dispatch => {
  usersRef.on("value", snapshot => {
    dispatch({
      type: FETCH_USERS,
      payload: snapshot.val()
    });
  });
};