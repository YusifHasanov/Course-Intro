import {createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {apiSlice} from "../api/ApiSlice";
import {collection} from "firebase/firestore";
import {db} from "../../../Firebase.config";
import {getDocs} from "firebase/firestore";

export const registerAdapter = createEntityAdapter({
    selectId: (register) => register.id,
    sortComparer: (a,b) => a.id.localeCompare(b.id)
});
 
const initialState  = registerAdapter.getInitialState();

 export const extendedRegisterSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRegister: builder.query({
            async queryFn() {
                try {

                    const registerRef = collection(db, "Registrations");
                    const queryRegister = await getDocs(registerRef);
                    let usersData = [];
                  if(queryRegister.docs.length > 0) {
                      queryRegister.forEach((doc) => {
                          usersData.push({
                              id: doc.id,
                              ...doc.data(),
                          });
                      });
                  }
                    console.log(usersData);
                 return {data:usersData};
                } catch (error) {
                    return { error };
                }
            },

            transformResponse(baseQueryReturnValue, meta, arg) {
                return registerAdapter.setAll(initialState, baseQueryReturnValue.data);
            },
            invalidatesTags: (result, error, todo) => [{type: 'Register', id: 'LIST'}]
        }),
    })
 });

export const {useGetRegisterQuery} =extendedRegisterSlice;

export const selectRegistersResult = extendedRegisterSlice.endpoints.getRegister.select();

const selectRegistersData = createSelector(
    selectRegistersResult,
    result => result.data
)
 


export const {selectAll: selectAllRegisters } = registerAdapter.getSelectors(
    state => selectRegistersData(state) ?? initialState
);

