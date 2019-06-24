import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Table from './components/Table'

ReactDOM.render(<Table />, document.getElementById('root'));
registerServiceWorker();
