import * as React from 'react';
import { FC, ChangeEventHandler } from 'react';
import { Author } from '../../model/Author';
import TextInput from '../../components/TextInput';

type Props = {
  author: Author,
  onSave: Function,
  onChange: ChangeEventHandler<HTMLInputElement>,
  errors?: any
};

const AuthorForm: FC<Props> = ({author, onSave, onChange, errors}) => (
  <form>

    <h1>Manage Author</h1>

    <TextInput
      name="firstName"
      label="First Name"
      value={author.firstName}
      error={errors.firstName}
      onChange={onChange}
    />
    <br />

    <TextInput
      name="lastName"
      label="Last Name"
      value={author.lastName}
      error={errors.lastName}
      onChange={onChange}
    />
    <br />

    <input type="submit" value="Save" className="btn btn-default" onClick={(event) => onSave(event)} />

  </form>
);


/*
AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};*/

export default AuthorForm;
