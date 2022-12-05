const { Component } = require('react');

class ListOfContacts extends Component {
  state = {};

  render() {
    const contacts = this.props.listToRender;
    console.log(contacts);
    return (
      <div>
        <h3>Contacts</h3>
        <ul>
          {contacts.map(c => {
            return (
              <li key={c.id}>
                {c.name}: {c.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListOfContacts;
