import {configureStore} from "@reduxjs/toolkit";

import {setupListeners} from "@reduxjs/toolkit/query";
import {apiSlice} from "../features/redux/api/ApiSlice";
import {extendedUserSlice} from "../features/redux/slices/UserSlice";



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        register:extendedUserSlice.reducer
    },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

setupListeners(store.dispatch);


export default store;