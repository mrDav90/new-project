import MySpace from "./pages/MySpace/MySpace"
import Auth from "./pages/Auth/Auth";
import './App.scss';
import "./../node_modules/antd/dist/antd"
import "./../node_modules/antd/dist/antd.min.js";
import "./../node_modules/antd/dist/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/myspace" element={<MySpace />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
