import  { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// Step 1;
export const store = configureStore({
    reducer: todoReducer
})

