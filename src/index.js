import { observer, useObservable } from "mobx-react-lite";
import { FirebaseData, database } from "./FirebaseData";

let firebaseData = null;

export const useFirebaseObservable = (firebaseConfig, initialState) => {
  const store = useObservable(initialState);
  let data = store;
  if (!firebaseData) {
    firebaseData = FirebaseData(firebaseConfig, store, initialState);
  }
  data = firebaseData;

  return data;
};

export { observer, database };
