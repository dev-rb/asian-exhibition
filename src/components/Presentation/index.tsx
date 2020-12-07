import * as React from 'react';
import ArtView from '../ArtView';
import ExhibitView from '../ExhibitView';
import Navbar from '../Navbar';

const Presentation = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2rem' }}>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ArtView />
                <ExhibitView />
            </div>
        </div>
    );
}

export default Presentation;