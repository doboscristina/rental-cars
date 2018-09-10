import React from 'react';
import classNames from 'classnames';

export default class LocationsInput extends React.Component {
  render() {
    return (
      <fieldset id="location-fieldset">
        <div className="location-fieldset-container">
          <label htmlFor="search-location">Pick Up Location</label>
          <img alt="loader"
            src="https://cdn2.rcstatic.com/images/site_graphics/newsite/preloader64.gif"
            className={classNames('loader', {'visible': this.props.isFetching})}
            />
          <input
            type="text" id="search-location" name="search-location"
            placeholder="city, airport, station, region and district"
            role="textbox"
            onChange={this.props.onChange.bind(this)}
          />
        </div>
      </fieldset>
    )
  }
}
