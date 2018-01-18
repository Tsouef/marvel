import _ from 'lodash';
import uuid from 'uuid/v1';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FormField from './FormField';
import SelectField from './FormField';
import { addFavorites } from '../../actions';

const FIELDS = [
  { label: 'Title', name: 'title', type: 'text' },
  {
    label: 'Category',
    name: 'category',
    type: 'select',
    options: ['characters', 'comics']
  },
  { label: 'Description', name: 'description', type: 'textarea' },
  { label: 'Thumbnail', name: 'thumbnail', type: 'file' }
];

class CreateForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type, options }) => {
      return (
        <Field
          key={name}
          component={FormField}
          options={options}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => {
            console.log(values);
            this.props.addFavorites({
              ...values,
              id: uuid()
            });
          })}
        >
          {this.renderFields()}
          <Link to="/" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Add
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
}

CreateForm = connect(null, { addFavorites })(CreateForm);

export default reduxForm({
  validate,
  form: 'createForm'
})(CreateForm);
