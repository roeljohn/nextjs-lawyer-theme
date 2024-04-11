import { create } from 'zustand'

// Create a Zustand store
const useApiStorePage = create((set) => ({
  pages: null,
  isPageLoading: false,
  errorPage: null,
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

export default useApiStorePage;