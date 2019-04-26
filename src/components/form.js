
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPatient, receiveLoading, stopLoading } from '../actions/patient_action';
import './form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.changeInput = this.changeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveLoading();
    this.props.fetchPatient(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id='search-form'>
        <input type="text" placeholder="Enter patient name" value={this.state.name}
          onChange={this.changeInput("name")} />

        <button className="form-button"><i className="material-icons">search</i></button>
      </form>
    )
  }
}

const mdp = (dispatch) => {
  return {
    fetchPatient: patient => dispatch(fetchPatient(patient)),
    receiveLoading: () => dispatch(receiveLoading()),
    stopLoading: () => dispatch(stopLoading()),
  }
}

export default connect(null, mdp)(Form);