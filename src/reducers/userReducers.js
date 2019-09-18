import {
  POST_USER_DATA_START,
  POST_USER_DATA_SUCCESS,
  FETCH_TRIP_DATA_START,
  FETCH_TRIP_DATA_SUCCESS,
  FETCH_TRIP_DATA_FAILURE,
  FETCH_TRIP_ID_START,
  FETCH_TRIP_ID_SUCCESS,
  FETCH_TRIP_ID_FAILURE

} from '../actions/userActions';

const tripInitialState = {
  trips: [],
  savedTrips: [],
}
const usersInitialState = {
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
  trips: [],
  credentials: {}
}

export const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case POST_USER_DATA_START:
      return {
        ...state,
        isLoading: true
      }
    case POST_USER_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload
        // isLoading: false
      }
    default:
      return state;
  };
};

export const tripsReducer = (state = tripInitialState, action) => {
  switch (action.type) {
    case FETCH_TRIP_DATA_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_TRIP_DATA_SUCCESS:
      return {
        ...state,
        trips: action.payload,
        isLoading: false
      }
    case FETCH_TRIP_DATA_FAILURE:
      return {
        ...state,
        isLoading: false
      }
      case FETCH_TRIP_ID_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_TRIP_ID_SUCCESS:
      return {
        ...state,
        savedTrips:[...state.savedTrips, action.payload],
        isLoading: false
      }
    case FETCH_TRIP_ID_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}

export const reducers = { tripsReducer, userReducer };