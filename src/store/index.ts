import { applyMiddleware, compose, createStore, Store, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import rootSaga from './sagas';
import rootReducer from './reducers';

const configureStore = (): Store => {
	const sagaMiddleware = createSagaMiddleware();
	const middleware: Middleware[] = [sagaMiddleware];
	let composeEnhancers;

	if (process.env.NODE_ENV !== 'production') {
		composeEnhancers =
			(typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
	}

	if (process.env.NODE_ENV === 'production') {
		composeEnhancers = compose;
	}

	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

	(store as any).sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

const store = createWrapper(configureStore, { debug: process.env.NODE_ENV !== 'production' });

(global as any).store = store;

export default store;
