import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App";
import { CryptoContextProvider } from "./components/CryptoContext";
//import CryptoContext from "./components/CryptoContext";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-89iddx6a.us.auth0.com"
      clientId={process.env.REACT_APP_AUTH0_ID}
      redirectUri={window.location.origin}
    >
      <CryptoContextProvider>
        <App />
      </CryptoContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
