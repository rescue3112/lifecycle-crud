import { Component } from 'react';
import Input from './Input';
import Note from './Note';

const serverURL = 'http://localhost:7070/notes';

export default class CRUD extends Component {
  state = { notes: [] };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(serverURL)
      .then(response => response.json())
      .then(result => {
        this.setState({
          notes: [...result]
        });
      });
  }

  postData = (id, content) => {
    const data = JSON.stringify({ id, content });
    fetch(serverURL, {
      method: 'POST',
      body: data,
    })
      .then(this.getData);
  }

  deleteData = (id) => {
    fetch(`${serverURL}/${id}`, {
      method: 'DELETE'
    })
      .then(this.getData);
  }

  render() {
    return (
      <div className="crud">
        <header className="crud-header">
          <h2>Notes</h2>
          <div className="crud-reload" onClick={this.getData} />
        </header>
        <ul className="crud-notes">
          {this.state.notes.map((note) =>
            <Note key={note.id} content={note.content}>
              <div
                className="crud-delete"
                onClick={() => this.deleteData(note.id)}
              />
            </Note>
          )}
        </ul>
        <Input addNote={this.postData} />
      </div>
    );
  }
}