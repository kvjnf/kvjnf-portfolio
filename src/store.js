import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { useSelector as rawUseSelector } from 'react-redux'

import { contentApi } from "./services/api";

export const store = configureStore({
  reducer: {
    [contentApi.reducerPath]: contentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(contentApi.middleware)
});

setupListeners(store.dispatch)

export const useSelector = rawUseSelector;