import React from 'react';
import { Button, Modal, ModalHeader,  ModalFooter } from 'reactstrap';
import AddUserForm from './AddUserForm';
import New from '../New'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button className="addnewuserbtn" color="primary" onClick={this.toggle}>Add new User {this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} charCode="X">Create New User</ModalHeader>
          <New/>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      

    );
  }
}

export default ModalExample;