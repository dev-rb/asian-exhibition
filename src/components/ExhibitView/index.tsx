import * as React from 'react';
import { useSelector } from 'react-redux';
import { ExhibitionState } from '../../redux/slices';

const ExhibitView = () => {

    const selectedExhibit = useSelector((state : ExhibitionState) => state.selectedExhibit)

    return (
        <div style={{ height: '80vh', border: '2px solid #EEEEEE', display: 'flex', width: '100%', marginLeft: '5rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={selectedExhibit.design} style={{ width: '50%', height: 'auto' }} />
        </div>
    );
}

export default ExhibitView;