import { 
  Routes,
  Route
 } from 'react-router-dom';

import Home from './pages/Home';
import Header from "./containers/Header/Header";

// import history from './../history';
/*

<Routes history={history}>
  <Route exact path="/" component={Top} />
  <Route exact path="/detail/:id" component={Detail} />
  <Route component={NotFound} />
</Routes>
*/

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  );
}
