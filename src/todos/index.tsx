import React from 'react';
import style from './style.module.css';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useTodoActions } from '../actions';
import { RootState } from '../reducers';
import { TodoModel } from '../models';
import { Header, TodoList, Footer } from '../components';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
  (key) => TodoModel.Filter[key]
);

const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
  [TodoModel.Filter.SHOW_ALL]: () => true,
  [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
  [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
};

export namespace Todo {
  export interface Props extends RouteComponentProps<void> {}
}

export const Todo = ({ history, location }: Todo.Props) => {
  const dispatch = useDispatch();
  const todoActions = useTodoActions(dispatch);
  const { todos, filter } = useSelector((state: RootState) => {
    const hash = location?.hash?.replace('#', '');
    return {
      todos: state.todos,
      filter: FILTER_VALUES.find((value) => value === hash) ?? TodoModel.Filter.SHOW_ALL
    };
  });

  const handleClearCompleted = React.useCallback((): void => {
    todoActions.clearCompleted();
  }, [todoActions]);

  const handleFilterChange = React.useCallback(
    (filter: TodoModel.Filter): void => {
      history.push(`#${filter}`);
    },
    [history]
  );

  const filteredTodos = React.useMemo(() => (filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos), [todos, filter]);
  const activeCount = React.useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);
  const completedCount = React.useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);

  return (
    <div className={style.normal}>
      <Header addTodo={todoActions.addTodo} />
      <TodoList todos={filteredTodos} actions={todoActions} />
     
    </div>
  );
};
