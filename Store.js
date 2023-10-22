import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./screens/Redux/CartReducer";

export default configureStore({
    reducer:{
        cart:CartReducer
    }
})