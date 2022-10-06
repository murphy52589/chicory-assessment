# Chicory react take home assignment
Author: Kyle Murphy

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals

1. Create a new React application 
2. Create a new view
3. Query the API to populate the dropdown (use the response `name` attribute)
4. Upon the user clicking on one of the options, save that to localStorage only to
   become the default option upon refreshing the page. (Persist user selection)

## Nice To Haves
1. Api error handling
2. Api loading state
3. Api caching

## Api Info

Query: `query retailers {
retailers(zipCode: "11234", blacklistedRetailers: [], whitelistedRetailers: []) {
id
slug
shopOnLogoUrl
logoUrl
name
requiresLocation
}
}`

GraphQL Server Endpoint: http://prod-cart.chicoryapp.com/api/graph


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
