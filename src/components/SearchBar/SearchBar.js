import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };
 const handleSubmit = e => {
   e.preventDefault();

    if (query.trim() === '') {
     return toast.error('Cannot search for empty request. Please, dial in something');
    }
   onSubmit(query);
   setQuery('');
  };

    return (
      <header className={s.searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm }>
          <button type="submit" className={s['SearchForm-button']} >
            <span className={s['SearchForm-button-label']}>Search</span>
    </button>

    <input id="searchField"
      className={s['SearchForm-input']}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      onChange={handleChange}
    />
  </form>
</header>
    );
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
