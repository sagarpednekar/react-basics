import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function time(){
    const element = (
        <div>
            <h1>Time now is  {new Date().toLocaleTimeString()}</h1>
        </div>
    )    
    ReactDOM.render(element, document.getElementById('root'));
}
ReactDOM.render(<App />,document.getElementById('root') );
//setInterval(time,1000);
registerServiceWorker();
