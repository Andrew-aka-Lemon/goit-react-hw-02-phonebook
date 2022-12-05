// import PropType from 'prop-types';
import { Component } from 'react';

import { ButtonAddFriend, Title } from './AddContactForm.styled';

class AddContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleInput = e => {
    // const newText = e.currentTarget.value;
    console.log(e.currentTarget.elemens.name);

    // this.setState({
    //   name: newText,
    // });
  };

  handleSubmit = () => {
    return;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Title>Name</Title>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInput}
        />
        <Title>Phone number</Title>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.phone}
        />
        <ButtonAddFriend
          type="submit"
          // onSubmit={ }
        >
          Add contact
        </ButtonAddFriend>
      </form>
    );
  }
}

export default AddContactForm;
