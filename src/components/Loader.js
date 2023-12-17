import { jsx as _jsx } from "react/jsx-runtime";
import { Html } from "@react-three/drei";
const Loader = () => {
    return (_jsx(Html, { children: _jsx("div", { className: "flex items-center justify-center fixed h-screen w-full bg-red-800", children: _jsx("div", { className: "w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" }) }) }));
};
export default Loader;
