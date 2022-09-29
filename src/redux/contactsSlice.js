import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      Loading.pulse();
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      Loading.remove();
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      Loading.remove();
    },
    [addContact.pending]: state => {
      Loading.pulse();
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      Loading.remove();
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      Loading.remove();
    },
    [deleteContact.pending]: state => {
      Loading.pulse();
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      Loading.remove();
    },
    [deleteContact.rejected]: (state, { payload }) => {
      Loading.remove();
      state.error = payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

Loading.init({
  svgSize: '300px',
  svgColor: 'grey',
});

// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items'],
// };

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },

//     removeContact(state, action) {
//       state.items = state.items.filter(arrow => arrow.id !== action.payload);
//     },
//     changeFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const persistContacts = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

// export const { addContact, removeContact, changeFilter } = contactSlice.actions;
