

This repository has an example implementation using the `Sitecore Search JS SDK` which
integrates with Sitecore Search via cli-created Input Search Results component, a  Basic Search Results widget adding a search input at the top. Visitors can search without page refresh or redirect.

## Prerequisites
### Node.js

The project needs to have Node.js installed to build the project. We recommend using the LTS version of Node.js. You can find the latest version of Node.js [here](https://nodejs.org/en/).

### Environment variables

You need to create a .env file in the root of the project with the following variables assigned:

```
REACT_APP_SEARCH_ENV=<environment - Expected values: prod, staging, prodEu or apse2 >
REACT_APP_CUSTOMER_KEY=<customer key>
REACT_APP_SEARCH_API_KEY=<API key provided in CEC>
```

### Obfuscation

This project uses the WebpackObfuscator plugin for the production build: 

 npm run build production

You can customize the obfuscation options according to your needs. Check the javascript-obfuscator documentation for more options: https://github.com/javascript-obfuscator/javascript-obfuscator