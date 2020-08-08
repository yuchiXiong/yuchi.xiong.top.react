import { createStore, combineReducers } from 'redux';

import { reducer as homeReducer } from '@/pages/home/store';
import { reducer as archiveReducer } from '@/pages/archive/store';
import { reducer as tagReducer } from '@/pages/tag/store';

const reducer = combineReducers({
    home: homeReducer,
    archive: archiveReducer,
    tag: tagReducer
});

export default createStore(reducer);

