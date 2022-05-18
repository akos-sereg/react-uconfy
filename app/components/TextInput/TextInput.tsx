import * as React from 'react';
import { FC, ChangeEventHandler, KeyboardEventHandler, useRef } from 'react';

type Props = {
  name: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>,
  label?: string,
  placeholder?: string,
  value?: string,
  error?: any,
  type?: string,
  disabled?: boolean
};

const TextInput: FC<Props> = ({ name, label, type, onChange, onKeyUp, placeholder, value, disabled, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  const inputRef = useRef(null);
  return (
    <div className={wrapperClass}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      {label != null && (<label htmlFor={name}>{label}</label>)}
      <div className="field">
        <input
          disabled={disabled}
          type={type ? type : 'text'}
          name={name}
          className="form-control"
          placeholder={placeholder}
          ref={inputRef}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <div className="input">{error}</div>
      </div>
    </div>
  );
};

export default TextInput;
