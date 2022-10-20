import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Forms from './Components/Forms';
import ApplicationModes from './Constraints/ApplicationModes';
export { Forms, ApplicationModes };
export * from './';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
