import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        }
        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);
    const adjustBiplaneForScreenSize = () => {
        let screenScale, screenPosition;
        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        }
        else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }
        return [screenScale, screenPosition];
    };
    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43.4];
        }
        else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -6.5, -43.4];
        }
        return [screenScale, screenPosition];
    };
    const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    return (_jsxs("section", { className: "w-full h-screen relative", children: [_jsx("div", { className: "absolute top-20 left-0 right-0 z-10 flex items-center justify-center", children: currentStage && _jsx(HomeInfo, { currentStage: currentStage }) }), _jsx(Canvas, { className: `w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`, camera: { near: 0.1, far: 1000 }, children: _jsxs(Suspense, { fallback: _jsx(Loader, {}), children: [_jsx("directionalLight", { position: [1, 1, 1], intensity: 2 }), _jsx("ambientLight", { intensity: 0.5 }), _jsx("hemisphereLight", { color: "#b1e1ff", groundColor: "#000000", intensity: 1 }), _jsx(Bird, {}), _jsx(Sky, { isRotating: isRotating }), _jsx(Island, { isRotating: isRotating, setIsRotating: setIsRotating, setCurrentStage: setCurrentStage, position: islandPosition, rotation: [0.1, 4.7077, 0], scale: islandScale }), _jsx(Plane, { isRotating: isRotating, position: biplanePosition, rotation: [0, 20.1, 0], scale: biplaneScale })] }) }), _jsx("div", { className: "absolute bottom-2 left-2", children: _jsx("img", { src: !isPlayingMusic ? soundoff : soundon, alt: "jukebox", onClick: () => setIsPlayingMusic(!isPlayingMusic), className: "w-10 h-10 cursor-pointer object-contain" }) })] }));
};
export default Home;
