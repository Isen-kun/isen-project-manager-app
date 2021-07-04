import { projectFirestore } from "../Firebase/config";

const useFireStoreWrite = (collection, data) => {
  projectFirestore.collection(collection).add(data);
};

export default useFireStoreWrite;
