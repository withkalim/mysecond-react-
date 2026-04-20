// import { createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

// const userSlice = createSlice({
//   name: "user",
//   //   initialState: { token: null },
//   initialState: { user: null },

//   reducers: {
//     login: (state, action) => {
//       console.log(action, "action");
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
      
//       // state.token = action.payload.token;
//       state.user = action.payload.user;
//     },
//     logout: (state) => {
//       // localStorage.removeItem("token");
//         // state.token = null;
//       state.user = null;
//       toast.success("Logout successfull.");
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;

// export default userSlice.reducer;
