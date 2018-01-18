import React from 'react';
import SelectInput from '../Input/SelectInput';
import TextInput from '../Input/TextInput';
import Button from '../Button/Button';

const Search = ({
  onSubmit,
  onSelectChange,
  onInputChange,
  valueInput,
  valueSelect
}) => {
  console.log(valueInput);
  return (
    <div>
      <h5>What do you want to search?</h5>

      <form onSubmit={onSubmit}>
        <div>
          <label>Choose your category</label>
          <SelectInput
            value={valueSelect}
            className="browser-default"
            onChange={onSelectChange}
          >
            <option value="characters">characters</option>
            <option value="comics">comics</option>
          </SelectInput>
        </div>
        <div className="input-field">
          <TextInput
            id="name"
            type="text"
            name="title"
            placeholder="Enter a Name"
            onChange={onInputChange}
            value={valueInput}
          />
        </div>
        <Button
          disabled={!valueInput}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </Button>
      </form>
    </div>
  );
};

export default Search;
