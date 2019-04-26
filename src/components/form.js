
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPatient } from '../actions/patient_action';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };
    this.changeInput = this.changeInput.bind(this);
    this.submitPatient = this.submitPatient.bind(this);
  }

  changeInput(field) {
    return (e) => {
      debugger
      this.setState({ [field]: e.target.value });
    }
  }

  submitPatient(e) {
    e.preventDefault();
    this.props.fetchPatient(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitPatient} >
        <input type="text" placeholder="first name" value={this.state.firstName}
        onChange={this.changeInput("firstName")} />

        <input type="text" placeholder="last name" value={this.state.lastName}
        onChange={this.changeInput("lastName")} />
      </form>
    )
  }
}

const mdp = (dispatch) => {
  return {
    fetchPatient: patient => dispatch(fetchPatient(patient)),
  }
}

export default connect(null, mdp)(Form);