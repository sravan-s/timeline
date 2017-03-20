import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initApp } from './../../actions';
import TimelineSummaryItem from './../../components/TimelineSummaryItem';

const mapStateToProps = (state, ownProps) => {
  return { state, ownProps };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log('dispactcing', dispatch, ownProps);
      dispatch(initApp());
    }
  };
};

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.init = props;
  }
  componentDidMount() {
    console.log(this.init);
    this.init.onClick();
  }
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
