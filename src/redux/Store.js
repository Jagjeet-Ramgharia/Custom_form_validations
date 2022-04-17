import { configureStore } from "@reduxjs/toolkit";
import userReduces from "./Slice";

export default configureStore({
  reducer: {
    user: userReduces,
  },
});
