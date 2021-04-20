import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var arr = [];
for(var i=0;i<10000;i++){
  arr.push(Math.floor((Math.random()*10)%2));
}
    ReactDOM.render(
      <React.StrictMode>
        <App className="hideit"/>
      </React.StrictMode>,
      document.getElementById('root')
    );
function matrix(){
  for(var i=0;i<10000;i++){
    arr[i] = (Math.floor((Math.random()*10)%2));
  }
  ReactDOM.render(
      <React.StrictMode>
        <div className="matrix">{arr.join(" ")}</div>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
var data = setInterval(matrix,100);

setTimeout(
  () => {
    clearInterval(data);
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  },
  2000
);