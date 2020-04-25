//@flow

import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getData } from "../action/getData";
import {
  getData as getDataSelector,
  isDataLoadedSelector
} from "../selectors/getData";
import { Wrapper, TitleWrapper, Title, Data, StyledLink } from "./styles";

import type { CustomerData } from "../type";

type Props = {
  data: Data[],
  getData: () => any,
  isDataLoaded: boolean
};

type State = {};

export class Container extends PureComponent<Props, State> {
  constructor(props: Props) {
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
            <TitleWrapper>
              <Title>Name</Title>
              <Title>Age</Title>
              <Title>Gender</Title>
            </TitleWrapper>
            {data.map(d => {
              return (
                <StyledLink
                  to={`/customer/${d.customer_id}`}
                  key={d.customer_id}
                  target="_blank"
                >
                  <Data id={d.customer_id}>{d.customer_name}</Data>
                  <Data id={d.customer_id}>{d.age}</Data>
                  <Data id={d.customer_id}>{d.gender}</Data>
                </StyledLink>
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
