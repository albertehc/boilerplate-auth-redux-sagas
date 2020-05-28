import React from "react";
import ReactDOM from "react-dom";
import {HelmetProvider} from "react-helmet-async";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./Global.styles";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <GlobalStyle />
                <App />
            </HelmetProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
