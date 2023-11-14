import React from 'react';
import { useSelector } from 'react-redux';
import {
  PhoneBookInputContainer,
  PhoneBookContactList,
  LoadingWrapper,
} from '../phoneBookStyled';
import {
  selectContacts,
  selectFilter,
  selectLoading,
} from 'Redux/phoneBook/selectors';
import { ContactListItem } from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);

  const getFilteredData = () => {
    return contacts.filter(
      contact =>
        (contact.name &&
          filter &&
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())) ||
        (contact.number && contact.number.includes(filter.trim()))
    );
  };

  const filteredData = getFilteredData();

  return (
    <PhoneBookInputContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.7 }}
    >
      Contact List
      {loading && (
        <LoadingWrapper>
          <div className="loader"></div>
        </LoadingWrapper>
      )}
      <PhoneBookContactList>
        {filteredData.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </PhoneBookContactList>
    </PhoneBookInputContainer>
  );
};

export default ContactList;
