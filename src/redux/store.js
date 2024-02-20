// store.js
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import modalSliceNew from './modalSliceNew';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    modalNew:modalSliceNew
  },
});

export default store;
