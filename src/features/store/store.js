import { configureStore } from '@reduxjs/toolkit';
import { inquiryApi } from '../services/inquiryApi';

 const store = configureStore({
  reducer: {
    [inquiryApi.reducerPath]: inquiryApi.reducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        inquiryApi.middleware
    ),
});
export default store;