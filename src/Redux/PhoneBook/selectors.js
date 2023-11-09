import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;
export const selectDeletedId = state => state.contacts.contacts.deletedId;

export const selectFilteredData = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      item =>
        item.name &&
        filter &&
        item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
