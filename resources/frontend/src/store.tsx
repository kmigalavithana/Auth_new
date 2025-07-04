import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import AuthReducerSlice from "./Utilities/slices/auth/AuthSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["AuthReducerSlice"],
};

const rootReducer = combineReducers({
    authentication: AuthReducerSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,

        }),
});

const persistor = persistStore(store);

export { store, persistor };
