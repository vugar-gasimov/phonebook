import React from 'react';
import { useSelector } from 'react-redux';
import {
  PhoneBookInputContainer,
  PhoneBookContactList,
  LoadingWrapper,
} from '../PhoneBookStyled';
import {
  selectContacts,
  selectFilter,
  selectLoading,
} from 'Redux/PhoneBook/selectors';
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
    <PhoneBookInputContainer>
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
