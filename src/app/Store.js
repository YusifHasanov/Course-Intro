import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../features/redux/api/ApiSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {extendedRegisterSlice} from "../features/redux/slices/RegisterSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        register:extendedRegisterSlice.reducer
    },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

setupListeners(store.dispatch);


export default store;