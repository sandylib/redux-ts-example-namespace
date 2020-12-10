import React from 'react';
import style from './style.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useTodoActions } from '../../actions';
import { RootState } from '../../reducers';
import { TodoModel } from '../../models';
import { Header, TodoList, Footer } from '../../components';


const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
  [TodoModel.Filter.SHOW_ALL]: () => true,
  [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
  [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
};


export const App = () => {
  const dispatch = useDispatch();
  const todoActions = useTodoActions(dispatch);

  const { todos, filter } = useSelector((state: RootState) => {
    return {
      todos: state.todos,
      filter: TodoModel.Filter.SHOW_ALL
    };
  });

  const filteredTodos = React.useMemo(() => (filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos), [todos, filter]);
  const activeCount = React.useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);

  return (
    <div className={style.normal}>
      <Header addTodo={todoActions.addTodo} />
      <TodoList todos={filteredTodos} actions={todoActions} />
      <Footer activeCount={activeCount} />
    </div>
  );
};
