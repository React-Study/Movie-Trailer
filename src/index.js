import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from 'style';

const root = ReactDOM.createRoot(document.getElementById('root'));

let queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
