import {useContext,useState,useEffect} from "react";
import fireStore from "../keys/firebaseConfig";
import {StateContext} from "../context/stateProvider";

const useFireStore = ({collectionName}) => {
    const [contentArray, setContentArray] = useState([]);
    const [inProgress, setinProgress] = useState(true);
    const [error, setError] = useState(null);
    const [user,setUser] = useContext(StateContext).user;
    console.log(setUser);

    const databaseRef = fireStore.collection(user).doc("bookmarks").collection(collectionName);

    useEffect(()=>{
        try{
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
    }catch(error){
            setError(error);
    }
    },[collectionName]);

    return {inProgress,contentArray,error};
}
 
export default useFireStore;