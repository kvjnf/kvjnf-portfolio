import {
  BrowserRouter, 
  Routes,
  Route
 } from 'react-router-dom';

import Home from '../components/pages/Home'
import Detail from '../components/pages/Detail';
import NotFound from '../components/uiParts/NotFound/NotFound';
import Layout from '../components/pages/Layout';

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/detail/:slug' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}