import { Environment } from "@sitecore-search/react";

export const SEARCH_CONFIG = {
    env: process.env.REACT_APP_SEARCH_ENV,
    customerKey: process.env.REACT_APP_CUSTOMER_KEY,
    apiKey: process.env.REACT_APP_SEARCH_API_KEY,
};

export const IsSearchEnabled = () => SEARCH_CONFIG.env && SEARCH_CONFIG.customerKey && SEARCH_CONFIG.apiKey ? true : false;
