import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTION_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    payload: collectionsMap,
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    payload: errorMessage,
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
  };
};
