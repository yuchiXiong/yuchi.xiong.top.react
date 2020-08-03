import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Spin } from 'antd';

import routes from './routes/';
import store from './stores';

import Header from './components/header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Spin />}>
          <Header />
          {renderRoutes(routes)}
        </Suspense >
      </Router>
    </Provider>
  );
}

export default App;
