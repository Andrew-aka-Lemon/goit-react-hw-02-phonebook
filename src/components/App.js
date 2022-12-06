import { Component } from 'react';
import styled from 'styled-components';
// import { nanoid } from 'nanoid';

import AddContactForm from './AddContactForm';
import ListOfContacts from './ListOfContacts';
import Filter from './Filter';
import { Title } from './AddContactForm/AddContactForm.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Rolie Pupson', number: '459-12-56' },
    ],
    filter: '',
  };

  addContactHandler = newContact => {
    if (
      this.state.contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(newContact.name.toLowerCase());
      }).length !== 0
    ) {
      alert(`${newContact.name} already in contact list`);
      return;
    }

    //
    //   return;
    // }
    // console.log(newContact.name.toLowerCase());

    this.setState(ps => {
      // console.log(ps.contacts);
      return {
        contacts: [...ps.contacts, newContact],
      };
    });
  };

  setFilterHandler = f => {
    this.setState({ filter: f });
  };

  render() {
    const { contacts, filter } = this.state;
    const filerItem = filter.toLowerCase();
    const listToRender = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filerItem);
    });

    // console.log(this.state.contacts[0].name.toLowerCase());

    return (
      <Wrapper>
        <div>
          <h1>Phonebook</h1>
          <AddContactForm onSubmit={this.addContactHandler} />
          <Filter
            onChange={this.setFilterHandler}
            filterText={this.state.filter}
          />
          <Title>Contacts</Title>
          <ListOfContacts listToRender={listToRender} />
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  margin-top: 50px;
  margin-left: 30%;
  font-size: 20px;
  color: #010101;
`;

export { App };
