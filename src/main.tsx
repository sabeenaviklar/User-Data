import React from 'react';
import { TextField, Button, Container } from '@mui/material';
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Button href='/home' type="submit" variant="contained" color="primary">
          View
        </Button>
    <App />

  </React.StrictMode>,
)
