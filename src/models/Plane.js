import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);
    useEffect(() => {
        if (isRotating) {
            actions["Take 001"]?.play();
        }
        else {
            actions["Take 001"]?.stop();
        }
    }, [actions, isRotating]);
    return (_jsx("mesh", { ...props, ref: ref, children: _jsx("primitive", { object: scene }) }));
};
export default Plane;
