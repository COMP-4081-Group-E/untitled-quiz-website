import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateQuizPage from './pages/CreateQuizPage';
import TakeQuizPage from './pages/TakeQuizPage';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/create/quiz'>
        <CreateQuizPage />
      </Route>
      <Route path='/quiz/:id'>
        <TakeQuizPage />
      </Route>
    </Switch>
  );
};

export default App;