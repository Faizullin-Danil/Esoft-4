import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { Provider } from 'react-redux'
import Router from './Router'
import store from "./store/store"; 
import './index.css'; 
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
