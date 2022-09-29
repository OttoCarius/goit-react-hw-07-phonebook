import { StyledInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = e => {
    e.preventDefault();
    dispatch(changeFilter(e.currentTarget.value.toLocaleLowerCase()));
  };
  return (
    <StyledInput
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Find contact by name"
    />
  );
};

export default Filter;
