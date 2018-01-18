import React from 'react';
import _ from 'lodash';
// import FileInput from './FileInput';

export default ({ input, label, type, options, meta: { touched, error } }) => {
  switch (type) {
    case 'text':
      return (
        <div>
          <label>{label}</label>
          <input {...input} type={type} style={{ marginBottom: '5px' }} />
          <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      );
    case 'textarea':
      return (
        <div>
          <label>{label}</label>
          <textarea type={type} {...input} style={{ marginBottom: '5px' }} />
          <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      );
    case 'select':
      return (
        <div>
          <label>{label}</label>
          <select
            className="browser-default"
            {...input}
            style={{ marginBottom: '5px' }}
          >
            {options.map((value, index) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      );
    case 'file':
      console.log(input);
      return (
        <div>
          <label>{label}</label>
          <input
            {...input}
            type="file"
            value={null}
            style={{ marginBottom: '5px' }}
          />
          <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      );
    default:
      return <div />;
  }
};
