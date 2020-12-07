import * as React from 'react';
import { useSelector } from 'react-redux';
import { ExhibitionState } from '../../redux/slices';

const ExhibitView = () => {

    const selectedExhibit = useSelector((state: ExhibitionState) => state.selectedExhibit)

    return (
        <div style={{ height: '80vh', border: '2px solid #E2E2E2', display: 'flex', width: '100%', marginLeft: '5rem', justifyContent: 'center', alignItems: 'center', background: '#F8F8F8' }}>
            { selectedExhibit.design && <img src={require(`../../images/${selectedExhibit.design}`)} style={{ width: '80%', height: 'auto' }} />}
        </div>
    );
}

export default ExhibitView;