import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Spin } from 'antd';

import Header from './components/header';
import Footer from './components/footer';

import routes from './routes/';

function App() {
  return (
    <>
      <Header />
      <div className='blogs-body'>
        <Suspense fallback={<Spin />}>
          {renderRoutes(routes)}
        </Suspense >
      </div>
      <Footer />
    </>
  );
}

export default App;
