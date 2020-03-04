import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HookExample from './hook/HookExample'
import TimerInHook from './hook/TimerInHook'
import TimerInCustomizedHook from './hook/TimerInCustomizedHook'
import CustomTextInput from './refs/CustomTextInput'
import AutoFocusTextInput from './refs/AutoFocusTextInput'
import CallbackRefCustomTextInput from './refs/CallbackRefCustomTextInput'
import * as serviceWorker from './serviceWorker';

const appGalery = (
  <div>
    <App />
    <HookExample />
    <TimerInHook />
    <TimerInCustomizedHook />
    <CustomTextInput />
    <AutoFocusTextInput />
    <CallbackRefCustomTextInput />
  </div>
)

ReactDOM.render(appGalery, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
