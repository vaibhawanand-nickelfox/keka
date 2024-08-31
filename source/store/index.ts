import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"


import { StorageUtils } from "services/storage"

import { AppReducer } from "store/slices/AppSlice"

const rootReducer = combineReducers({
  app: AppReducer,
})

const persistConfig = {
  key: "root",
  storage: StorageUtils,
  version: 1,
  timeout: 5000,
  whitelist: ["app"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  /**
   * Middleware function for configuring Redux store middleware.
   *
   * @param {Function} getDefaultMiddleware - The function to get the default middleware configuration.
   * @returns {Object} The middleware configuration object.
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
