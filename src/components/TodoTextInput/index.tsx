import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.css';

export declare namespace TodoTextInput {
  export interface Props {
    placeholder?: string;
    newTodo?: boolean;
    onSave: (text: string) => void;
  }

  export interface State {
    text: string;
  }
}

export const TodoTextInput = ({ placeholder, newTodo, onSave }: TodoTextInput.Props): JSX.Element => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const text = event.currentTarget.value.trim();
      if (event.key === 'Enter') {
        onSave(text);
        setInputText('');
      }
    },
    [onSave, setInputText]
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(event.target.value);
    },
    [setInputText]
  );

  const handleBlur = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.currentTarget.value.trim();
      if (!newTodo) {
        onSave(text);
      }
    },
    [onSave, newTodo]
  );

  const classes = classNames(
    {
      [style.edit]: !newTodo,
      [style.new]: newTodo
    },
    style.normal
  );

  return (
    /* eslint-disable */
    <input
      className={classes}
      type="text"
      autoFocus={true}
      placeholder={placeholder}
      value={inputText}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleSubmit}
    />
  );
};
