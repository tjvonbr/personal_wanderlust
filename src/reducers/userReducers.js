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

  trips: [
    {
      name: "Moose Track Adventure Resort, Outfitter & Guide Service",
      street: "593 Kawishiwi Trail",
      rest: "Ely, MN 55731",
      number: 218-365-4106,
      description: "Ely's closest resort to the Bondary Waters and just 7 miles outside Ely.  NEW in 2019 and open year round -- 4 bedroom/2 bathroom lake home with air conditioning, gas fireplace and dishwasher -- sleeps 16.  Great for family reunions and more!",
      img: 'https://www.exploreminnesota.com/memberimage.ashx?id=26827&width=203&mar=1'
    }
  ]
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
        // users: {...users, action.payload}
        isLoading: false
      }
    default:
      return state;
  }
}