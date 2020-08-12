import React from 'react';
import {Modal} from 'react-bootstrap';
import { AddCardForm } from './AddCardForm';

// modal to add a new post

export class AddCard extends React.Component {
  
    render() {
      return (
        <Modal
        {...this.props}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCardForm handleSubmit={this.props.handleSubmit}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      );
    }
  }