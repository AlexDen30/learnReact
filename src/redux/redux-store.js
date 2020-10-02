import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import sidebarReducer from "./sidebar-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;