import "./App.css";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./redux/store";
import Number from "./components/Number";
import Users from "./components/Users";
import Users1 from "./components/Users1";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/* <Counter />
                <Number />
                <Users /> */}
                <Users1 />
            </div>
        </Provider>
    );
}

export default App;
