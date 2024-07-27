import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: []
    },
  },
  reducers: {
    addContact(state, action) { },
    deleteContact(state, action) { },
    selectContacts(state, action) { },
  }
});

export const { addContact, deleteContact, selectContacts } = contactsSlice.actions;

export default contactsSlice.reducer;