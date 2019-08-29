import axios from 'axios';

// USER LOGIN -- NEEDS TO BE UPDATED!!!
export const POST_USER_DATA_START = "POST_USER_DATA_START";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";

export const registerUser = creds => dispatch => {
  console.log('action creds', creds)
  dispatch ({ 
    type: POST_USER_DATA_START,
    actions: creds
   })
};

// FETCH TRIPS
export const FETCH_TRIP_DATA_START = "FETCH_TRIP_DATA_START";
export const FETCH_TRIP_DATA_SUCCESS = "FETCH_TRIP_DATA_SUCCESS";
export const FETCH_TRIP_DATA_FAILURE = "FETCH_TRIP_DATA_FAILURE";

export const fetchTrips = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRIP_DATA_START })
    axios
      .get("https://wanderlust-be.herokuapp.com/api/trips")
      .then(response => {
        console.log("FETCH TRIPS:", response.data)
        dispatch({ type: FETCH_TRIP_DATA_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_TRIP_DATA_FAILURE, payload: error.response })
      })
  };
};

// DELETE TRIP
export const DELETE_TRIP_START = "DELETE_TRIP_START";
export const DELETE_TRIP_SUCCESS = "DELETE_TRIP_SUCCESS";
export const DELETE_TRIP_FAILURE = "DELETE_TRIP_FAILURE";

export const deleteTrip = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_TRIP_START })
    axios
      .delete("http://localhost:3300/api/trips/:id")
      .then(response => console.log(response))
      .catch(error => {
        dispatch({ type: DELETE_TRIP_FAILURE, payload: error.response })
      })
  };
};

// EDIT TRIP
export const EDIT_TRIP_START = "EDIT_TRIP_START";
export const EDIT_TRIP_SUCCESS = "EDIT_TRIP_SUCCESS";
export const EDIT_TRIP_FAILURE = "EDIT_TRIP_FAILURE";

export const editTrip = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_TRIP_START })
    axios
      .put("http://localhost:3300/api/trips/:id")
      .then(response => console.log(response))
      .catch(error => {
        dispatch({ type: EDIT_TRIP_FAILURE, payload: error.response })
      })
  };
};

// FETCH TRIP ID
export const FETCH_TRIP_ID_START = "FETCH_TRIP_ID_START";
export const FETCH_TRIP_ID_SUCCESS = "FETCH_TRIP_ID_SUCCESS";
export const FETCH_TRIP_ID_FAILURE = "FETCH_TRIP_ID_FAILURE";

export const fetchId = id => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRIP_ID_START })
    axios
      .get(`https://wanderlust-be.herokuapp.com/api/trips/${id}`)
      .then(response => {
        console.log("FETCH ID:", response.data)
        dispatch({ type: FETCH_TRIP_ID_SUCCESS, payload: response.data })
      })
      .catch(error => {
        console.log(error.response)
        dispatch({ type: FETCH_TRIP_ID_FAILURE, payload: error.response })
      })
  };
};