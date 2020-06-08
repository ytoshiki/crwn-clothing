import { createSelector } from "reselect"

const selectshop = state => state.shop

export const selectCollections = createSelector([selectshop], shop => shop.collections)

export const selectCollection = collectionUrlParam => createSelector([selectCollections], collections => collections[collectionUrlParam])

//Object keys converts object to array
export const selectCollectionsForPreview = createSelector([selectCollections], collections => Object.keys(collections).map(key => collections[key]))
