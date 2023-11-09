import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
} from '../PhoneBookStyled';
import { selectFilter } from 'Redux/PhoneBook/selectors';
import { setFilter } from 'Redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <PhoneBookInputContainer>
      <PhoneBookInputLabel>You can filter contacts here: </PhoneBookInputLabel>
      <PhoneBookInput
        value={filter}
        placeholder="Feel free to filter contacts..."
        onChange={handleFilterInput}
        name="filter"
        title="Filtering contact list by name or number."
      />
    </PhoneBookInputContainer>
  );
};

export default Filter;
