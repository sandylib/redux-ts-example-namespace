import React from 'react';
import style from './style.module.css';
import classNames from 'classnames';
import { TodoModel } from '../../models';

export const FILTER_TITLES = {
  [TodoModel.Filter.SHOW_ALL]: 'All',
  [TodoModel.Filter.SHOW_ACTIVE]: 'Active',
  [TodoModel.Filter.SHOW_COMPLETED]: 'Completed'
};

export declare namespace Footer {
  export interface Props {
    activeCount?: number;
  }
}

export const Footer = ({
  activeCount
}: Footer.Props): JSX.Element => {
  const renderTodoCount = React.useCallback((): JSX.Element => {
    const itemWord = activeCount === 1 ? ' item' : 'items';
    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }, [activeCount]);


  return (
    <footer className={style.normal}>
      {renderTodoCount()}
 
    </footer>
  );
};
