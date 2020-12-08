import React from 'react';
import styles from './styles.module.scss';
import { format } from 'date-fns';
import _ from 'lodash/fp';
/***************************************
 * helpers
 ***************************************/
const date = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
const array = _.compact([0, 1, false, 2, '', 3]).join(', ');

interface DemoProps {
  title: string;
  code: string;
  data: string;
}
const Demo = ({ title, code, data }: DemoProps) => (
  <div>
    <h3>{title}</h3>
    <p>
      <code>{code}</code>
      {data}
    </p>
  </div>
);
/***************************************
 * component
 ***************************************/
const LibDemo = () => (
  <div className={styles.libDemo}>
    <Demo
      title={'date-fns'}
      code={`format(new Date(2014, 1, 11), 'MM/dd/yyyy'): `}
      data={date}
    />
    <Demo
      title={'lodash/fp'}
      code={`_.compact([0, 1, false, 2, '', 3]): `}
      data={array}
    />
  </div>
);

export default LibDemo;
