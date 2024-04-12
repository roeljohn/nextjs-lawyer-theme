import { create } from 'zustand'
import { authToken } from './auth';

// Create a Zustand store
const useApiStore = create((set) => ({
  data: null,
  menu: null,
  pages: null,
  isLoading: false,
  error: null,
  isMenuLoading: false,
  errorMenu: null,
  isPageLoading: false,
  errorPage: null,
  fetchData: async (url) => {
    try {
      // Set loading state to true
      set({ isLoading: true });

      // Fetch data from the API
      const response = await fetch(url);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse JSON response
      const data = await response.json();
      // Update store with data
      set({ data, isLoading: false, error: null });
    } catch (error) {
      // Update store with error
      // Update store with error
      set({ isLoading: false, error: error.message });
    }
  },
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
  fetchDataPage: async (url) => {
    try {
      // Set loading state to true
      set({ isPageLoading: true });

      // Fetch data from the API
      const response = await fetch(url);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse JSON response
      const pages = await response.json();
      // Update store with data
      set({ pages, isPageLoading: false, errorPage: null });
    } catch (error) {
      // Update store with error
      // Update store with error
      set({ isPageLoading: false, errorPage: error.message });
    }
  },
}));

export default useApiStore;