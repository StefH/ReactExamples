import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'reflect-metadata' // https://stackoverflow.com/questions/49079169/typeerror-reflect-hasownmetadata-is-not-a-function
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
