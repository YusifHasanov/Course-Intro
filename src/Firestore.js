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
            return {data: {ids: [], entities: {}}};
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
    update: async (collectionName, data) => {
        try {
            await updateDoc(doc(db, collectionName, data.id), data);
            return await data;
        } catch (e) {
            console.log(e);
        }
    },
    delete: async (collectionName, data) => {
        try {
            await deleteDoc(doc(db, "Todos", data.id));
            return await data;
        } catch (e) {
            console.log(e);
        }
    }
}
