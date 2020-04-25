//@flow

import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../action/getData";
import {
  getData as getDataSelector,
  isDataLoadedSelector
} from "../selectors/getData";
import { Wrapper, Customer, Title, Data } from "./styles";

type Props = {
  data: any,
  getData: () => any,
  isDataLoaded: boolean
};

type State = {};

class Container extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data, isDataLoaded } = this.props;
    return (
      <Wrapper>
        {isDataLoaded && (
          <>
            <Customer>
              <Title>Name</Title>
              <Title>Age</Title>
              <Title>Gender</Title>
            </Customer>
            {data.map(d => {
              return (
                <Customer key={d.customer_id}>
                  <Data id={d.customer_id}>{d.customer_name}</Data>
                  <Data id={d.customer_id}>{d.age}</Data>
                  <Data id={d.customer_id}>{d.gender}</Data>
                </Customer>
              );
            })}
          </>
        )}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: getDataSelector(state),
    isDataLoaded: isDataLoadedSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
