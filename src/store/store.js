import userReducer from "./slices/userSlice"
import { configureStore } from "@reduxjs/toolkit"
import { userApi } from "./apis/userApi"
import { productApi } from "./apis"

const store = configureStore({
  reducer:{
    users: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(userApi.middleware)
  .concat(productApi.middleware)
})

export { store }