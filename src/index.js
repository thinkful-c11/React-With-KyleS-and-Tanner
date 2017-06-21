import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container/container.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
