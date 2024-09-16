import { create } from "zustand";
import axios from "axios"; // Directly import axios here

const useStore = create((set) => ({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get("http://localhost:3500/items");
      set({ products: response.data, isLoading: false, error: null });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  addProduct: (product) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },
  deleteProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },
  updateProduct: (updatedProduct) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    }));
  },
  cart: [],
  addToCart: (productId) => {
    set((state) => ({
      cart: [...state.cart, productId],
    }));
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((id) => id !== productId),
    }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));

export default useStore;
