import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Note extends Component {
  render() {
    return (
      <li className="crud-note">
        <div className="crud-note-container">
          <div className="crud-note-content">
            {this.props.content}
          </div>
          {this.props.children}
        </div>
      </li>
    );
  }
}

Note.propTypes = {
  content: PropTypes.string.isRequired,
}