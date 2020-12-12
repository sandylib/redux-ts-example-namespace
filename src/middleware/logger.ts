import { Middleware } from 'redux';
import { TodoActions } from '../actions/todos';

export const logger: Middleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(action);
  }

  if(action.type === TodoActions.Type.ADD_TODO) {
    store.dispatch({type:'do somthing', payload:'what ever'})
  }
  

  // store.dispatch({type:TodoActions.Type.ADD_TODO, payload:'what ever'})

  return next(action);
};