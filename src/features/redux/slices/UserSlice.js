import { createEntityAdapter, createSelector}
    from "@reduxjs/toolkit";


import {apiSlice} from "../api/ApiSlice";
import {FireStore} from "../../../Firestore";


const userAdapter = createEntityAdapter({
    selectId: user => user.id,
    sortComparer: (a, b) => a.id.localeCompare(b.id)
});

const initialState = userAdapter.getInitialState();

export const extendedUserSlice = apiSlice.injectEndpoints({

    endpoints: builder => ({
        getUsers: builder.query({
            async queryFn() {
                const response = FireStore.get("users");
                return response
            },
            transformResponse: response => {
                return userAdapter.setAll(initialState, response)
            },
            providesTags: (result, error, arg) => [{type: 'Todo', id: 'LIST'}]

        }),
        addUser: builder.mutation({
            async queryFn(data) {
                const response = FireStore.add("users", data);
                return response
            },
            // transformResponse: (response, todo) => {
            //     return userAdapter.addOne(initialState, {...todo, id: response.id})
            // },
            invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
        }),
        // updateUser: builder.mutation({
        //     query: (todo) => ({
        //         url: `/todos/${todo.id}`,
        //         method: 'PUT',
        //         body: todo
        //     }),
        //     transformResponse: (response, todo) => {
        //         return todoAdapter.updateOne(initialState, {id: todo.id, changes: todo})
        //     },
        //     invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
        // }),
        // deleteTodo: builder.mutation({
        //     query: (todo) => ({
        //         url: `/todos/${todo.id}`,
        //         method: 'DELETE',
        //     }),
        //     transformResponse: (response, todo) => {
        //         return todoAdapter.removeOne(initialState, todo.id)
        //     },
        //     invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
        // }),
    })
})

export const {
    useGetUsersQuery,
    useAddUserMutation,
} = extendedUserSlice;

export const selectUsersResult = extendedUserSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
    selectUsersResult,
    result => result.data
)


export const {selectAll: selectAllUsers, selectById: selectUserById,selectIds:selectAllIds} = userAdapter.getSelectors(
    state => selectUsersData(state) ?? initialState
);


