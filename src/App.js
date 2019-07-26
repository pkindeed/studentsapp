import React from 'react';
import './App.css';
import StudentApi from './components/StudentApi';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import AppBare from './components/AppBare';
import TextFielder from './components/TextFielder';
import { Box } from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <Router>
        <AppBare />
        <Box mx="auto" width="50%">
          <Switch>
            <Route exact path='/'  component={TextFielder} />
            <Route exact path='/viewdata' component={StudentApi} />
          </Switch>
          </Box>
      </Router>
    </div>
  );
}

export default App;
