import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice';
import modalReducer from './features/modal/ModalSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
