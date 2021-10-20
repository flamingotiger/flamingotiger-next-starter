import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import store from 'src/store';

const rootReducer = combineReducers({});

export default rootReducer;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof rootReducer>;
