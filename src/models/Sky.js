import { jsx as _jsx } from "react/jsx-runtime";
import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Sky = ({ isRotating }) => {
    const skyRef = useRef();
    const sky = useGLTF(skyScene);
    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.15 * delta;
        }
    });
    return (_jsx("mesh", { ref: skyRef, children: _jsx("primitive", { object: sky.scene }) }));
};
export default Sky;
