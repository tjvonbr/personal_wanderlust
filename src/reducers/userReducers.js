import React from 'react';

import {
  POST_USER_DATA_START,
  POST_USER_DATA_SUCCESS
} from '../actions/userActions';

const initialState = {

  users: [
    {
      firstName: "Trevor",
      lastName: "Von Bruenchenhein",
      email: "tjvonbr@gmail.com",
      username: "tjvonbr",
      password: 12345,
      id: Date.now()
    }
  ],
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_DATA_START:
      return {
        ...state,
        isLoading: true
      }
    case POST_USER_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}