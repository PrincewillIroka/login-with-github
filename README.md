## Login with Github

An app that implements "Login with GitHub" functionality in React

![Login Screen](https://imgur.com/wW6k2HF.png)

### Usage and Setup
- Clone this repo. Go into the root folder and run *yarn* to install the dependencies.
- Login to your Github account and create an OAuth app by following the steps provided here (https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app). Note: For this example, while creating the OAuth app, you can set your Homepage URL to http://localhost:3000/ and Authorization callback URL to http://localhost:3000/login if you are running your app locally.
- Create a .env file in the root folder and set these variables: 
  ```
  REACT_APP_CLIENT_ID=Your Client ID from Github
  REACT_APP_CLIENT_SECRET=Your Client Secret from Github
  REACT_APP_REDIRECT_URI=http://localhost:3000/login
  REACT_APP_PROXY_URL=http://localhost:5000/authenticate
  SERVER_PORT=5000
  ```
- Run *yarn start* to start the app
