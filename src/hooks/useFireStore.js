import {useContext,useState,useEffect} from "react";
import fireStore from "../keys/firebaseConfig";
import {StateContext} from "../context/stateProvider";

const useFireStore = (collectionName) => {
    const [contentArray, setContentArray] = useState([]);
    const [inProgress, setinProgress] = useState(true);
    const [user,setUser] = useContext(StateContext).user;
    console.log(setUser);

    useEffect(()=>{
        const databaseRef = fireStore.collection(user.email).doc("bookmarks").collection(collectionName);
            const unsubscribe = databaseRef.orderBy("timestamp")
            .onSnapshot(snapshot=>{
                let doc = [];
                snapshot.forEach((snap)=>{
                    doc.push({...snap.data(),id:snap.id});
                })
                setContentArray(doc);
                setinProgress(false);
            })
            return ()=>unsubscribe();
    },[user.email,collectionName]);

    console.log(inProgress);
    return {inProgress,contentArray};
}
 
export default useFireStore;