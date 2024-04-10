// useApiStore.js
import { create } from 'zustand';
import { authToken } from './auth'; // Import the authToken from the auth file

// Create a Zustand store
const useApiStoreMenu = create((set) => ({
  menu: null,
  isMenuLoading: false,
  errorMenu: null,
  // Use authToken directly from the imported file
  fetchDataMenu: async (url) => {
    try {
      // Set loading state to true
      set({ isMenuLoading: true });

      // Fetch data from the API with bearer token in headers
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Use authToken here
        },
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse JSON response
      const menu = await response.json();
      // Update store with data
      set({ menu, isMenuLoading: false, errorMenu: null });
    } catch (errorMenu) {
      // Update store with error
      set({ isMenuLoading: false, errorMenu: errorMenu.message });
    }
  },
}));

export default useApiStoreMenu;