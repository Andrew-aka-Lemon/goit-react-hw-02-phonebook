// import PropType from 'prop-types';
import { Component } from 'react';

class AddContactForm extends Component {
  state = {
    input: '',
  };

  handleInput = e => {
    const newText = e.currentTarget.value;

    this.setState({
      input: newText,
    });
  };

  handleSubmit = () => {
    return;
  };

  render() {
    return (
      <div>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInput}
          value={this.state.input}
        />
        <button
          type="submit"
          // onSubmit={ }s
        >
          Add name
        </button>
      </div>
    );
  }
}

export default AddContactForm;
