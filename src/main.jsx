import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomForm from './features/ToDo_CRUD/CustomForm';
import "./assets/sass/main.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomForm />
  </React.StrictMode>,
)
