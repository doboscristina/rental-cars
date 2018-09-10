import React from 'react';
import LocationsInput from './components/LocationsInput';
import LocationsList from './components/LocationsList';
import { loadSearchResults } from './action';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      isFetching: state.results.isFetching,
      error: state.results.error,
      results: state.results.results
    };
}

function mapDispatchToProps(dispatch) {
    return { dispatch };
}


class Search extends React.Component {
  onChange = (event) => {
    if(event.target.value.length > 1 ) {
      this.props.dispatch(loadSearchResults(event.target.value));
    }
  }
  render() {
    return (
      <div>
        <form className="form">
          <h2> Where are you going? </h2>
          
          <LocationsInput onChange={ this.onChange } isFetching={ this.props.isFetching }/>
        </form>
          <LocationsList results={ this.props.results }/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
