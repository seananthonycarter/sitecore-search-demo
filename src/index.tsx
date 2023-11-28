import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { WidgetsProvider } from '@sitecore-search/react';
import SearchResultsWidget from './SearchResultsStyled';
import type { Environment } from "@sitecore-search/data";
import { createTheme } from "@sitecore-search/ui";
import { IsSearchEnabled, SEARCH_CONFIG } from './lib/search'

const { style } = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById('site-search') as HTMLElement
);

root.render(
  <React.StrictMode>
      <div style={style}>
        <WidgetsProvider
               env={SEARCH_CONFIG.env as Environment}
               customerKey={SEARCH_CONFIG.customerKey}
               apiKey={SEARCH_CONFIG.apiKey}
          >     
            <SearchResultsWidget rfkId="rfkid_7" />
          </WidgetsProvider>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



