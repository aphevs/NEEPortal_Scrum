import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Ner from './components/NER';
import Biogas from './components/Biogas';
import Windturbine from './components/Windturbine';
import Photovoltaic from './components/Photovoltaic';
import MiniHydraulic from './components/MiniHydraulic';
import PrivateInstallation from './components/PrivateInstallation';

function App() {

  //Test

  return (
      <>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/NER" component={Ner} exact/>
            <Route path="/NER/Biogas" component={Biogas} exact/>
            <Route path="/NER/Photovoltaic" component={Photovoltaic} exact/>
            <Route path="/NER/Windturbine" component={Windturbine} exact/>
            <Route path="/NER/PrivateInstallation" component={PrivateInstallation} exact/>
            <Route path="/NER/MiniHydraulic" component={MiniHydraulic} exact/>
          </Switch>
        </div>
      </BrowserRouter>
       </>
  );
}

export default App;
