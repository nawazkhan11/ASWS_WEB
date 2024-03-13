// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { token: null, user: null },
//   reducers: {
//     setCredentials: (state, action) => {
//       const { jwtToken, user } = action.payload;
//       state.token = jwtToken;
//       state.user = user;
//     },
//     logOut: (state, action) => {
//       state.token = null;

//       state.user = null;
//     },
//   },
// });

// export const { setCredentials, logOut } = authSlice.actions;

// export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;


import { createSlice } from "@reduxjs/toolkit";

const authToken = "token"; // Define a key for the token in local storage

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, user: null },
  reducers: {
    setCredentials: (state, action) => {
      const { jwtToken, user } = action.payload;
      state.token = jwtToken;
      state.user = user;

      // Store the token in local storage
      localStorage.setItem(authToken, jwtToken);
    },
    logOut: (state, action) => {
      state.token = null;
      state.user = null;

      // Remove the token from local storage when logging out
      localStorage.removeItem(authToken);
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
