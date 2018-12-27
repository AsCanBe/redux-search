import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Card from './card';
import { GlobalStyle } from '../index';

const SearchWrapper = styled.div`
  background-color: #21294b;
`

const Cards = styled.div`
  @media (min-width: 768px) {
    display: grid;
    place-items: start;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
  }
`

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      searchTerm: '',
    }
  }

  fireFetch(searchTerm) {
    const API = 'https://content.guardianapis.com/search';
    const apiKey = '1fe45855-ddfd-4854-a064-538848027623';
    const additionalFields = 'headline%2Cthumbnail%2Cwordcount%2ClastModified%2CtrailText';
    const pageSize = '9';

    fetch(API + `?q=${searchTerm}` + `&show-fields=${additionalFields}` + `&api-key=${apiKey}` + `&page-size=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data.response.results,
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.fireFetch();
  }

  componentDidUpdate() {
    if (this.props.searchTerm !== this.state.searchTerm) {
      this.fireFetch(this.props.searchTerm);
      this.setState({
        searchTerm: this.props.searchTerm,
      });
    }
  }

  render() {
    const resultsArray = this.state.results.map((result, i) =>
      <Card
        key={i}
        title={result.fields.headline}
        thumbnail={result.fields.thumbnail}
        trailText={result.fields.trailText}
        webUrl={result.webUrl}
      />
    );

    return (
      <div>
        <GlobalStyle />
        <SearchWrapper className="container">
          <SearchBar />
        </SearchWrapper>
        <Cards>
          {resultsArray}
        </Cards>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
}

export default connect(mapStateToProps)(Results);
