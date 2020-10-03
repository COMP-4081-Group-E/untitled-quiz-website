import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateQuizPage from './pages/CreateQuizPage';

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
    </Switch>
  );
};

export default App;