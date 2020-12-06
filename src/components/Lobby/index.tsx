import { Container } from '@material-ui/core';
import * as React from 'react';
import lobbyWH from '../../images/lobbyWH.jpg';
import ArtView from '../ArtView';
import ExhibitView from '../ExhibitView';
import Navbar from '../Navbar';

const Lobby = () => {

    const [enter, setEnter] = React.useState(false);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {!enter && <div style={{ width: '100vw', height: '100vh', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lobbyWH})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', zIndex: 100, width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <h1 style={{ color: '#EE3333', fontSize: '10rem', fontFamily: 'Roboto', fontWeight: 700, zIndex: 100, marginTop: '2rem', marginLeft: '4rem' }}> Welcome, </h1>
                    <h2 style={{ color: '#B2B0B0', fontSize: '5rem', fontFamily: 'Roboto', fontWeight: 400, zIndex: 100, marginTop: '-5rem', marginLeft: '4rem' }}> To the Red Pandas Exhibit. </h2>
                    <h3 style={{ color: 'white', fontSize: '2rem', fontFamily: 'Roboto', fontWeight: 300, zIndex: 100, marginTop: '1.4rem', marginLeft: '4rem' }}> Exhibit Title: </h3>
                    <p style={{ width: '30rem', color: 'white', fontSize: '1.4rem', fontFamily: 'Roboto', fontWeight: 400, zIndex: 100, marginTop: '-0.8rem', marginLeft: '4rem' }}> “Contaminated: How Asian Americans Have Been Racialized as Carriers of Disease in the Past, and What It Means in the Present” </p>

                    <div onClick={() => setEnter(true)} style={{ width: '10rem', height: '2.8rem', background: '#8D4BFF', zIndex: 100, borderRadius: 200, marginLeft: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.8rem', cursor: 'pointer' }}>
                        <p style={{ color: 'white', fontFamily: 'Roboto', fontWeight: 400, fontSize: '1.8rem' }}> Enter </p>
                    </div>

                    <img src={require('../../images/FloorPlan.png')} style={{ zIndex: 100, marginLeft: '4rem', marginTop: '2.5rem' }} />
                </div>

                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div style={{ background: '#EEEEEE', width: '14rem', height: '3.5rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <p style={{ fontSize: '2.2rem', fontFamily: 'Roboto', fontWeight: 400, color: '#AAAAAA' }}> ASIAN </p>
                        <p style={{ fontSize: '2.2rem', fontFamily: 'Roboto', fontWeight: 400, color: '#8D4BFF', marginLeft: -20 }}> 210 </p>
                    </div>
                </div>
            </div>}

            {enter && <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2rem' }}>
                <Navbar />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ArtView />
                    <ExhibitView />
                </div>
            </div>}
        </div>
    );
}

export default Lobby;