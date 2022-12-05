import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';

class App extends Component {
  state = {
    contacts: [],
  };

  addContactHandler = e => {
    const name = e.currentTarget.elemens.name;
    const id = nanoid();
    const phone = e.currentTarget.elemens.phone;

    const newContact = { id, name, phone };
    console.log(newContact);

    //   this.setState(prevState => return {
    //     [...prevState].push(newContact)
    // });
  };

  render() {
    return (
      <Wrapper>
        <div>
          <AddContactForm onSubmit={this.addContactHandler} />
          <ListOfContacts />
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
