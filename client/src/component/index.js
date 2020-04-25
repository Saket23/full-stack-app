//@flow

import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../action/getData";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return <div>saket</div>;
  }
}

function mapStateToProps(state) {
  return {
    data: state.storeData.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
