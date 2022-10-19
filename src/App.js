import "./App.css";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./redux/store";
import Number from "./components/Number";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
                <Number />
            </div>
        </Provider>
    );
}

export default App;
