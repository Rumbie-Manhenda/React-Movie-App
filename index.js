import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './MovieDetails';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Switch>
    <App />
    <Route
      path="/movie/:movie1"
      render={(props) => <MovieDetails {...props} movie1={JSON.parse(props.match.params.movie1)} />}
    />
  </Switch>
</Router>
  </React.StrictMode>
);

reportWebVitals();
