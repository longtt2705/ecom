import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './app/firebase';
import { persistor, store } from './app/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </QueryClientProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </StrictMode >,
)
