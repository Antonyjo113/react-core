import { configureStore } from '@reduxjs/toolkit';  // Import configureStore from Redux Toolkit
import counterReducer from '../features/counter/counterReducer';


// Use configureStore to create the store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Attach counterReducer to the 'counter' key in the state
  },
});

export default store; // Export the configured store