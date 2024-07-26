import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    contact:  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/changeContact':
      return {
        contact: action.payload,
      }
  
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: rootReducer,
});