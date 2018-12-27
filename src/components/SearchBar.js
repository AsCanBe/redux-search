import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setSearchTerm } from '../actions';

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  flex-grow: 1;
`

const SearchInput = styled.input`
  border: none;
  border-radius: .3rem;
  padding: 1rem;
  flex-grow: 1;
`

const SearchButton = styled.button`
  border: none;
  border-radius: .3rem;
  padding: 1rem;
  margin-left: 1rem;
  background-color: #F2545B;
  color: #fff;
  font-weight: 700;
`

let SearchBar = (props) => {
  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault()
        const searchBox = document.getElementById('search-box');
        const searchTerm = searchBox.value.trim().toLowerCase().replace(/ /g,'-');
        props.dispatch(setSearchTerm(searchTerm));
        searchBox.value = '';
      }}
    >
      <SearchInput id="search-box" placeholder="Search for..." />
      <SearchButton type="submit">Go</SearchButton>
    </SearchForm>
  );
}

SearchBar = connect()(SearchBar);

export default SearchBar;
