import { Component } from 'react';
import styled from 'styled-components';

class ListOfContacts extends Component {
  state = {};

  render() {
    const { onDeleteBtn, listToRender } = this.props;
    return (
      <div>
        <ul>
          {listToRender.map(({ id, name, number }) => {
            return (
              <Lishka key={id}>
                <span>
                  {name}: {number}
                </span>
                <NotUglyBtn type="button" onClick={() => onDeleteBtn(id)}>
                  Delete
                </NotUglyBtn>
              </Lishka>
            );
          })}
        </ul>
      </div>
    );
  }
}

const NotUglyBtn = styled.button`
  margin-left: 5px;
  border-radius: 30%;
  border-color: #901818ce;
  background-color: #d1212152;

  :active {
    background-color: #e07474;
  }
`;

const Lishka = styled.li`
  display: flex;
  align-items: center;
`;

export default ListOfContacts;
