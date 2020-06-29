import { takeEvery } from 'redux-saga/effects'

import ShopActionTypes from "./shopActions"

export function* fetchCollectionsAsync() {
  yield console.log("i fired!!!!!!")
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}