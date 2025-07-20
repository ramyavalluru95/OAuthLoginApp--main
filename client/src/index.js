import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-w8tgx5qfz8u3h7if.us.auth0.com"
    clientId="Zqv9eeUGemMdYTVTPB45WHxdb6fMQaYA"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: "openid profile email",
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
