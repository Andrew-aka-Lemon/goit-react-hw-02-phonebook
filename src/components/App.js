import { Component } from 'react';
import styled from 'styled-components';
// import { nanoid } from 'nanoid';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';

class App extends Component {
  state = {
    contacts: [{ id: 12312312, name: 'Abiba', number: 999999999 }],
  };

  addContactHandler = newContact => {
    console.log(newContact);

    this.setState(ps => {
      console.log(ps.contacts);
      // return {
      //   contacts: [...ps.contacts].push(newContact),
      // };
    });
  };

  render() {
    return (
      <Wrapper>
        <div>
          <AddContactForm onSubmit={this.addContactHandler} />
          <ListOfContacts listToRender={this.state.contacts} />
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #010101;
`;

export { App };
