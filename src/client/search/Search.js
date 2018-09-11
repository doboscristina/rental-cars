import React from 'react';
import LocationsInput from './components/LocationsInput';
import LocationsList from './components/LocationsList';
import { loadSearchResults, clearSearchResults, noSearchResults } from './action';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      isFetching: state.results.isFetching,
      wasCalled: state.results.wasCalled,
      results: state.results.results,
      noSearchResults: state.results.noSearchResults,
    };
}

function mapDispatchToProps(dispatch) {
    return { dispatch };
}


class Search extends React.Component {
  onChange = (event) => {
    if(!this.props.wasCalled && event.target.value.length === 1) {
      this.props.dispatch(noSearchResults());
    } else if(this.props.wasCalled && event.target.value.length === 1) {
      this.props.dispatch(clearSearchResults());
    } else if(event.target.value.length > 1 ) {
      this.props.dispatch(loadSearchResults(event.target.value));
    }
  }
  render() {
    return (
      <div>
        <form className="form">
          <h2 className="heading"> Where are you going? </h2>

          <LocationsInput onChange={ this.onChange } isFetching={ this.props.isFetching }/>
        </form>
          <LocationsList results={ this.props.results } noSearchResults={ this.props.noSearchResults }/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
