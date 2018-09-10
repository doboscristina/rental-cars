import React from 'react';

export default class LocationsList extends React.Component {
  renderDropdown(results) {
     let items;
     if(results.length) {
       items = results.map((result, key) => (
         <li key={key}>{result.name}
           {result.iata ? `(${result.iata})` : ''} <br/>
           {result.city ? `${result.city},` : ''} {result.country}
         </li>
       ))
     } else {
        <li> No results found </li>
     }
     return items;
   }

  render() {
    return (
      <ul>
        { this.renderDropdown(this.props.results) }
      </ul>
    )
  }
}
