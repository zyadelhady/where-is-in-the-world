import React, { useState } from 'react';
import './App.css';
import Header from './containers/header/Header';
import CardContainer from './containers/CardContainer/CardContainer';
import { DarkmodeContext } from './context/context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FullCountry from './containers/FullCountry/FullCountry';
import { IDContext } from './context/ID';
function App() {
  const [isDark, setIsDark] = useState(false);
  const [id, setId] = useState();

  const appClasses = ['App', !isDark ? 'AppLight' : 'AppDark'];
  return (
    <BrowserRouter>
      <div className={appClasses.join(' ')}>
        <DarkmodeContext.Provider value={{ isDark, setIsDark }}>
          <IDContext.Provider value={{ id, setId }}>
            <Header />
            <Switch>
              <Route path="/" exact component={CardContainer} />
              <Route path={`/country/:id`} exact component={FullCountry} />
            </Switch>
          </IDContext.Provider>
        </DarkmodeContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
