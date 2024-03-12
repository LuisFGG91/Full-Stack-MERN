import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/main';
import Detail from './views/detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={(routeProps) => <Main {...routeProps} />} />
        <Route path="person/:id" render={(routeProps) => <Detail {...routeProps} /> } />
      </BrowserRouter>
    </div>
  );
}
export default App;