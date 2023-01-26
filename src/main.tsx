import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./utils/redux/store/store";
import DetailProduct from "./pages/DetailProduct";
import ProfilUser from "./pages/ProfilUser";

import Router from "./routes/Router";
import "./styles/index.css";

import Card from "./components/Card";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ProfilUser />
    </PersistGate>
  </Provider>
);