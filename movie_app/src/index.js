import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM(이) render(출력한다) App(컴포넌트인 App.js를). 
// 출력은 element id가 'root'인 곳(index.html)에
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
