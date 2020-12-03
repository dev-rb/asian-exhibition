import * as React from 'react';

const ExhibitView = () => {
    return (
        <div style={{ height: '50rem', border: '2px solid #EEEEEE', display: 'flex', width: '100%', marginLeft: '5rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={require('../../images/exampleHouse.jpg')} style={{ width: '50%', height: 'auto' }} />
        </div>
    );
}

export default ExhibitView;