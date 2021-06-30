import { Provider } from "react-redux";
import { store, persistor } from "../config/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from "../pages";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Route path="/" component={Dashboard} />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
