import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initApp } from './../../actions';
import TimelineSummaryItem from './../../components/TimelineSummaryItem';

const mapStateToProps = (state, ownProps) => {
  console.log({ state, ownProps });
  return { state, ownProps };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(initApp(ownProps.filter));
    }
  };
};

class LandingPageContainer extends Component {
  render() {
    return (
      <div>
        <TimelineSummaryItem title='alo' />
        <TimelineSummaryItem title='alo' />
      </div>
    );
  }
}

const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageContainer);

export default LandingPage;
