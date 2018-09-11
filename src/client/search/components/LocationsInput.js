import React from 'react';
import classNames from 'classnames';

 export default function LocationsInput(props) {
  return (
    <fieldset className="location-fieldset">
      <div className="input-wrapper">
        <label htmlFor="search-location" className="label">Pick Up Location</label>
        <img alt="loader"
          src="https://cdn2.rcstatic.com/images/site_graphics/newsite/preloader64.gif"
          className={ classNames('loader', { 'visible': props.isFetching }) }
        />
        <input
          type="text" id="search-location" className="input" name="search-location"
          placeholder="city, airport, station, region and district"
           aria-label="Pickup location input"
          onChange={ props.onChange.bind(this) }
        />
      </div>
    </fieldset>
  )
}
