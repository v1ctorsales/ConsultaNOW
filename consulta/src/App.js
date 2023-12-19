import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormularioDeLogin from './components/FormularioDeLogin';
import Footer from './components/Footer';
import Login from './pages/login';
import Consultar from './pages/consultar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/consultar" component={Consultar} />
      </Switch>
    </Router>
  );
}
export default App;