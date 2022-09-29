import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer },
});

// export const store = configureStore({
//   reducer: { contacts: persistContacts },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
