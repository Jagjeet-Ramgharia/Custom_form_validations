import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="bg-slate-400">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
