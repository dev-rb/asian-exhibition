import * as React from 'react';
import { ArrowForward, ArrowBack } from '@material-ui/icons';

interface Props {
    directionTo: string,
    goTo: () => void
}

const ViewControl = ({ directionTo, goTo }: Props) => {

    return (
        <div onClick={goTo} style={{ background: '#EEEEEE', width: '4rem', height: '4rem', borderRadius: 100, cursor: 'pointer', justifyContent: 'center', alignItems: 'center', display: 'flex', position: 'absolute', left: directionTo === 'back' ? -30 : 'none', right: directionTo === 'forward' ? -30 : 'none' }}>
            {directionTo === "forward" ? <ArrowForward style={{ fontSize: 35, color: '#8D4BFF' }} /> : <ArrowBack style={{ fontSize: 35, color: '#8D4BFF' }} />}
        </div>
    );
}

export default ViewControl;