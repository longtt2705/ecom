import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../shared/products';

export type CartItem = Product & {
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
  itemsToCheckout?: CartItem[];
}
const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      }

      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;

        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    setItemToCheckout: (state, action: PayloadAction<CartItem[]>) => {
        state.itemsToCheckout = action.payload;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, setItemToCheckout } = cartSlice.actions;

export default cartSlice.reducer;
