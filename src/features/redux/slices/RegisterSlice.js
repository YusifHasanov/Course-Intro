import {createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {apiSlice} from "../api/ApiSlice";
import {collection} from "firebase/firestore";
import {db} from "../../../Firebase.config";
import {getDocs,addDoc} from "firebase/firestore";

export const registerAdapter = createEntityAdapter({
    selectId: (register) => register.id,
    sortComparer: (a, b) => a.id.localeCompare(b.id)
});

const initialState = registerAdapter.getInitialState();

export const extendedRegisterSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRegister: builder.query({
            async queryFn() {
                try {

                    const registerRef = collection(db, "Registrations");
                    const queryRegister = await getDocs(registerRef);
                    let usersData = {};
                    let userIDs = [];
                    if (queryRegister.docs.length > 0) {
                        queryRegister.forEach((doc) => {
                            usersData[doc.id] = doc.data();
                            userIDs.push(doc.id);
                        });
                    }
                    return {data: {ids: userIDs, entities: usersData}};
                } catch (error) {
                    return {error};
                }
            },

            transformResponse: baseQueryReturnValue => {
                return registerAdapter.setAll(initialState, baseQueryReturnValue.data);
            },
            providesTags: (result, error, arg) =>
                result
                    ? [...result.ids.map(({id}) => ({type: 'Register', id})), 'Register']
                    : ['Register']


        }),
        addRegister: builder.mutation({
            async queryFn(data) {
                try {
                    const registerRef = collection(db, "Registrations");
                    let usersData = {};
                    let userIDs = [];
                    return await addDoc(registerRef, data);

                } catch (error) {
                    return {error};
                }
            },
            transformResponse: (response, todo) => {
              console.log(response);
            },
            invalidatesTags: (result, error, todo) => [{type: 'Todo', id: 'LIST'}]
        })
    })
});

export const {useGetRegisterQuery, useAddRegisterMutation} = extendedRegisterSlice;

export const selectRegistersResult = extendedRegisterSlice.endpoints.getRegister.select();

const selectRegistersData = createSelector(
    selectRegistersResult,
    result => result.data
)


export const {selectAll: selectAllRegisters} = registerAdapter.getSelectors(
    state => selectRegistersData(state) ?? initialState
);

