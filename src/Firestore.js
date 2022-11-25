import {db} from "./Firebase.config";
import {collection} from "firebase/firestore";
import {getDocs, addDoc,updateDoc,deleteDoc} from "firebase/firestore";

export const FireStore = {
    get: async (collectionName) => {
        try {
            const docRef = collection(db, collectionName)
            const response = await getDocs(docRef);
            let responseData = {};
            let ids = [];
            if (response.docs.length > 0) {
                response.forEach((doc) => {
                    responseData[doc.id] = {
                        ...doc.data(),
                        id: doc.id
                    };
                    ids.push(doc.id);
                });
                return {data: {ids: ids, entities: responseData}};
            }
        } catch (e) {
            console.log(e);
        }
    },
    add: async (collectionName, data) => {
        try {
            const docRef = collection(db, collectionName);
            const response = await addDoc(docRef, data);
            return response
        } catch (e) {
            console.log(e);
        }
    },
    update: async (collectionName, id, data) => {
        try {
            const docRef = collection(db, collectionName);
            const response = await updateDoc(docRef, data);
            return response;
        } catch (e) {
            console.log(e);
        }
    },
    delete: async (collectionName, id) => {
        try {
            const docRef = collection(db, collectionName,id);
            const response = await deleteDoc(docRef);
            return response;
        } catch (e) {
            console.log(e);
        }
    }
}