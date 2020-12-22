import React from 'react';
import cn from 'classnames'
import styles from './Field.module.css';

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

type Editor = 'textbox' | 'date' | 'search';

export interface IFieldProps {
  /* The unique field name */
  id: string;

  name?: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The field value */
  value?: any;

  onChange: (id: string, val: string) => void;
}

export const Field: React.FunctionComponent<IFieldProps> = ({ id, name, label, editor, value, onChange  }) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      {editor!.toLowerCase() === 'textbox' && (
        <input
          id={id}
          name={name || id}
          type="text"
          value={value}
          onChange={({ target: { id, value } }: InputChangeEvent) => onChange(id, value)}
          className={cn(styles.input)}
        />
      )}

{editor!.toLowerCase() === 'date' && (
        <input
          id={id}
          name={name || id}
          type="date"
          value={value}
          onChange={({ target: { id, value } }: InputChangeEvent) => onChange(id, value)}
          className={cn(styles.input)}
         
        />
      )}

      {editor!.toLowerCase() === 'search' && (
        <div className={styles.searchInput}>
          <input
            id={id}
            name={name || id}
            type="text"
            value={value}
            onChange={({ target: { id, value } }: InputChangeEvent) => onChange(id, value)}
            className={cn(styles.input)}
          />

        </div>
      )}
    </div>
  );
};
Field.defaultProps = {
  editor: 'textbox',
};
