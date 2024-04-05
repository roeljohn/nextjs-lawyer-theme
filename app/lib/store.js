import { create } from 'zustand'

// Create a Zustand store
const useApiStore = create((set) => ({
  data: null,
  isLoading: false,
  error: null,
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
      set({ isLoading: false, error: error.message });
    }
  },
}));

export default useApiStore;