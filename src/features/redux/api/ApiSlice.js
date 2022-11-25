import  {createApi, fetchBaseQuery,fakeBaseQuery}
    from  "@reduxjs/toolkit/query/react" ;



export const apiSlice=createApi({
    reducerPath:  "api" ,
    baseQuery:  fakeBaseQuery(),
    tagTypes: ['User'],
    endpoints: (builder) => ({
    })
})

