import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as homeReducer } from '@/pages/home/store';
import { reducer as archiveReducer } from '@/pages/archive/store';
import { reducer as tagReducer } from '@/pages/tag/store';
import { reducer as categoryReducer } from '@/pages/category/store';

const reducer = combineReducers({
    home: homeReducer,
    archive: archiveReducer,
    tag: tagReducer,
    category: categoryReducer
});

export default createStore(reducer, applyMiddleware(thunk));

