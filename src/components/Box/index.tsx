import * as THREE from 'three';
import * as React from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { Vector3 } from 'three';
import useWASD from '../../hooks/useWASD';
import { useBox } from '@react-three/cannon';

const lerp = (start: number, end: number, t: number) => {
    return start * (1 - t) + end * t
}

const clamp = (curr: number, max: number) => {
    if (curr === max) {
        return max;
    }

    return curr;
}

const Box = () => {

    const [meshRef, api] = useBox(() => ({ mass: 1, type: 'Dynamic', angularDamping: 1 }));

    const [ref, refApi] = useBox(() => ({ type: "Static" }))

    const { clock, camera } = useThree();

    const keys = useWASD();

    useFrame(() => {

        if (meshRef.current) {

            const direction = new Vector3();

            meshRef.current.getWorldDirection(direction);

            const front = new Vector3(0, 0, Number(keys.backwards) - Number(keys.forward));
            const side = new Vector3(Number(keys.left) - Number(keys.right), 0, 0);
            const forward = new Vector3();

            if (side.x != 0) {
                api.rotation.set(0, side.x * (clock.getElapsedTime() * 2), 0)
            }

            const test = new Vector3(0, 0, 1).applyQuaternion(meshRef.current.quaternion);

            const euler = new THREE.Euler(test.x, test.y, test.z);
            // console.log(euler);
            direction.normalize().multiplyScalar(4 * front.z);

            api.velocity.set(direction.x, 0, direction.z);
            refApi.position.set(meshRef.current.position.x, meshRef.current.position.y + 2, meshRef.current.position.z);
            refApi.rotation.set(direction.x, 0, direction.z)

        }
    })

    return (
        <>
            <mesh ref={meshRef}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" color="pink" />
            </mesh>

            <mesh ref={ref}>
                <boxBufferGeometry attach="geometry" args={[1, 0.2, 0.2]} />
                <meshStandardMaterial attach="material" color="blue" />
            </mesh>
        </>
    );
}

export default Box;