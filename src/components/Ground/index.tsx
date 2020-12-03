import { usePlane } from '@react-three/cannon';
import * as React from 'react';

const Ground = () => {

    const [ref, api] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[50, 50]} />
            <meshStandardMaterial attach="material" color="yellow" />
        </mesh>
    );
}

export default Ground;