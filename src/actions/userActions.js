export const POST_USER_DATA_START = "POST_USER_DATA_START";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";

export const registerUser = creds => {
  return (dispatch) => {
    dispatch({ 
      type: POST_USER_DATA_START,
      actions: creds
     })
  }
}