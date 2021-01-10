import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/Components/counter/counterSlice';
import { testReducer } from './reducers/test.reducer'
import rootSaga from './middleWare/index'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    counter: counterReducer,
    testReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)
