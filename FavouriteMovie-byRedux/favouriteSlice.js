import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const FavouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    list: JSON.parse(localStorage.getItem("favourites")) || [],
  },

  reducers: {
    AddtoFavourite: (state, action) => {
        console.log("Movie added:", action.payload); 
      const movieExist = state.list.find(
        movie => movie.id === action.payload.id
      );
      if (!movieExist) {
        state.list.push(action.payload);
        localStorage.setItem("favourites", JSON.stringify(state.list));
        toast.success("Movie added in favourite list");
      } else {
         toast.error("Movie already exist in favourite");
      }
    },
    RemoveFromFavourite: (state, action) => {
     const updatedList = state.list = state.list.filter(movie => movie.id !== action.payload);
      localStorage.setItem("favourites", JSON.stringify(updatedList));
    },
  },
});

export const { AddtoFavourite, RemoveFromFavourite } = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
