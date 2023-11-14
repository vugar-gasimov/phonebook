import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredData,
  selectFilter,
  selectContacts,
} from 'Redux/phoneBook/selectors';
import { setFilter } from 'Redux/filterSlice';
import { fetchDataThunk } from 'Redux/phoneBook/operations';
import {
  PhoneBookContactTitle,
  PhoneBookContainer,
  PhoneBookTitle,
  PhoneBookContactsContainer,
  PhoneBookMainContainer,
} from './phoneBookStyled';
import { BookUser, Phone } from 'lucide-react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredData = useSelector(selectFilteredData);

  useEffect(() => {
    dispatch(fetchDataThunk('contacts'));
  }, [dispatch]);

  const isNameExists = name => contacts.some(contact => contact.name === name);
  const isNumberExists = number =>
    contacts.some(contact => contact.phoneNumber === number);

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };
  const [lampActive, setLampActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLampActive(!lampActive);
    }, 4000); // Change lamp state every 4 seconds

    return () => clearInterval(interval);
  }, [lampActive]);
  return (
    <PhoneBookMainContainer>
      <PhoneBookContainer
        initial={{ opacity: 0, y: +200, x: '-100vw' }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 220 }}
      >
        <PhoneBookTitle $active={lampActive}>
          PhoneBook <Phone strokeWidth={1.5} />
        </PhoneBookTitle>
        <ContactForm
          isNameExists={isNameExists}
          isNumberExists={isNumberExists}
        />
      </PhoneBookContainer>

      <PhoneBookContactsContainer
        initial={{ opacity: 0, y: -200, x: '+100vw' }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 220 }}
      >
        <PhoneBookContactTitle>
          Contacts <BookUser strokeWidth={1.5} />
        </PhoneBookContactTitle>
        <Filter setFilter={handleFilterChange} filter={filter} />
        <ContactList contacts={filteredData} filter={filter} />
      </PhoneBookContactsContainer>
    </PhoneBookMainContainer>
  );
};

export default PhoneBook;
