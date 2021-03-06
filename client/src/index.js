import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
// import RenderSnackbar from '../src/components/screens/Profile/snackbar/snackbar'
import SimpleBackdrop from '../src/components/screeneffect/backdrop/backdrop'

ReactDOM.render(
  <React.StrictMode>
    <SimpleBackdrop>
      <App />
      </SimpleBackdrop>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
