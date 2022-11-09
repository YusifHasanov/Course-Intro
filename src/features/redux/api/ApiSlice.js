import {createApi,fakeBaseQuery} from "@reduxjs/toolkit/query";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery:  fakeBaseQuery(),
    tagTypes: ['Register'],
    endpoints : (builder)  =>({})
});



