import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk';
import { loadState, saveState } from '../handlers/localStorage'
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        movies: store.getState().movies
    });
});

export default store