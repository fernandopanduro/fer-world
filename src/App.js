import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/index";
import Navbar from "./components/Navbar";
const App = () => {
    return (_jsx("main", { className: "bg-slate-300/20", children: _jsxs(Router, { children: [_jsx(Navbar, {}), _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Home, {}) }) })] }) }));
};
export default App;
