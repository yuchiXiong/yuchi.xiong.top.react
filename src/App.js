import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Spin } from 'antd';

import routes from './routes/';
import store from './stores';

import Header from './components/header';
import Footer from './components/footer';

import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Spin />}>
          <Header />
          <section className='blogs-body'>
            {renderRoutes(routes)}
          </section>
          <Footer />
        </Suspense >
      </Router>
    </Provider>
  );
}

export default App;
