import { RootState } from "../redux/store"; // قم بضبط المسار حسب مكان ملف store

// Selector لجلب جميع المنتجات في السلة
export const selectCartItems = (state: RootState) => state.cart.items;

// Selector لحساب إجمالي عدد المنتجات
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Selector لحساب السعر الإجمالي
export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.Price * item.quantity, 0);