import { Component } from 'react';
import styled from 'styled-components';

class Filter extends Component {
  render() {
    const { onChange, filterText } = this.props;
    return (
      <div>
        <Title>Find contact by name</Title>
        <input
          name="filter"
          type="text"
          onChange={e => {
            onChange(e.currentTarget.value);
          }}
          value={filterText}
        />
      </div>
    );
  }
}

const Title = styled.p`
  margin: 0;
  margin-top: 10px;
`;

export default Filter;
