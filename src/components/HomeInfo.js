import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { arrow } from "../assets/icons";
const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (_jsxs("h1", { className: "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5", children: ["Hi, I'm", _jsx("span", { className: "font-semibold mx-2 text-white", children: "Fernando" }), "\uD83D\uDC4B", _jsx("br", {}), "A Software Engineer from Mexico \uD83C\uDF2E"] }));
    if (currentStage === 2) {
        return (_jsxs("div", { className: "info-box", children: [_jsxs("p", { className: "font-medium sm:text-xl text-center", children: ["Worked with many companies ", _jsx("br", {}), " and picked up many skills along the way"] }), _jsxs("a", { href: "https://www.linkedin.com/in/fernando-panduro/", target: "_blank", className: "neo-brutalism-white neo-btn", children: ["Learn more", _jsx("img", { src: arrow, alt: "arrow", className: "w-4 h-4 object-contain" })] })] }));
    }
    if (currentStage === 3) {
        return (_jsxs("div", { className: "info-box", children: [_jsxs("p", { className: "font-medium text-center sm:text-xl", children: ["Led multiple projects to success over the years. ", _jsx("br", {}), " Curious about the impact?"] }), _jsxs("a", { href: "https://portfolio.ferpanduro.com/", target: "_blank", className: "neo-brutalism-white neo-btn", children: ["Visit my portfolio", _jsx("img", { src: arrow, alt: "arrow", className: "w-4 h-4 object-contain" })] })] }));
    }
    if (currentStage === 4) {
        return (_jsxs("div", { className: "info-box", children: [_jsxs("p", { className: "font-medium sm:text-xl text-center", children: ["Need a project done or looking for a dev? ", _jsx("br", {}), " I'm just a few keystrokes away"] }), _jsxs("a", { href: "https://ferpanduro.com/contact", target: "_blank", className: "neo-brutalism-white neo-btn", children: ["Let's talk", _jsx("img", { src: arrow, alt: "arrow", className: "w-4 h-4 object-contain" })] })] }));
    }
    return null;
};
export default HomeInfo;
