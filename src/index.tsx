import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { WidgetsProvider } from '@sitecore-search/react';
import SearchResultsWidget from './SearchResultsStyled';
import type { Environment } from "@sitecore-search/data";
import { createTheme } from "@sitecore-search/ui";
import logo from './logo.svg';

const DISCOVER_CONFIG = {
  env: process.env.REACT_APP_SEARCH_ENV,
  customerKey: process.env.REACT_APP_CUSTOMER_KEY,
  apiKey: process.env.REACT_APP_SEARCH_API_KEY,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/*Override default theme styles in this section as per https://developers.sitecorecloud.io/search-sdk/react/latest/storybook/index.html?path=/story/theme-and-styles-default-theme--page*/
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#333',
      light: '#EEECFB',
      dark: '#4A37D5',
      contrastText: '#fff',
    },
  }
});

const { style } = customTheme;

root.render(
  <React.StrictMode>
      <div className="header">
        <a className="SiteHeader-brand" href="/">
          <img src={logo} alt="Website Logo" />
        </a>
      </div>
      <div style={style}>
        <WidgetsProvider
               env={DISCOVER_CONFIG.env as Environment}
               customerKey={DISCOVER_CONFIG.customerKey}
               apiKey={DISCOVER_CONFIG.apiKey}
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
