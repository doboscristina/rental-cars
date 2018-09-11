import React from 'react';

export default class LocationsList extends React.Component {
  renderDropdown(results) {
    let items;
    if(results.docs) {
      items = results.docs.map((result, key) => (
        <li key={key}>{result.name}
          { result.iata ? `(${result.iata})` : '' } <br/>
          { result.city ? `${result.city},` : '' } { result.country }
        </li>
      ))
    } else if (results.numFound === 0) {
      items = ( <li> { results.docs[0].name } </li> );
    } else if (this.props.noSearchResults) {
      items = ( <li> { this.props.noSearchResults } </li> );
    }
    return items;
  }

  render() {
    return (
      <ul className="search-results-list">
        { this.renderDropdown(this.props.results) }
      </ul>
    )
  }
}
