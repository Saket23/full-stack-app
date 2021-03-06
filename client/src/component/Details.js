//@flow

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData } from "../action/getDetailsData";
import { withRouter } from "react-router-dom";
import { Wrapper, Title, Data } from "./styles/details";

import type { DetailsData } from "../type";

type Props = {
  getData: number => any,
  isDataLoaded: boolean,
  data: DetailsData[],
  match: any
};

type State = {};

import {
  isDataLoadedSelector,
  getData as getDataSelector
} from "../selectors/getDetailsData";

export class Details extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    const { getData, match } = this.props;
    const id = match.params.customerId;
    getData(id);
  }
  render() {
    const { data, isDataLoaded } = this.props;
    return (
      <Wrapper>
        {isDataLoaded ? (
          <>
            <Title>{`${data[0].customer_name}'s addresses`}</Title>
            {data.map((d, index) => {
              return (
                <Data key={index} id={index}>
                  {d.address}
                </Data>
              );
            })}
          </>
        ) : (
          <div>No data found</div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
