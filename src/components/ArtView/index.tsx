import { Grid } from '@material-ui/core';
import * as React from 'react';
import ViewControl from '../ViewControl';

const ArtView = () => {
    return (
        <div style={{ width: '40%', height: '50rem', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid #EEEEEE' }}>
            {/* Image */}
            <div style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
                <img src={require('../../images/exhibitImg.jpg')} style={{ width: '70%', height: 'auto' }} />
            </div>

            {/* Divider */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative', marginTop: '2.5rem' }}>
                <ViewControl directionTo="back" />
                <div style={{ width: '80%', height: 1, borderTop: '2px solid red' }} />
                <ViewControl directionTo="forward" />
            </div>

            {/* Text */}

            <div style={{ margin: '2.5rem 2rem', display: 'flex', overflow: 'scroll', overflowX: 'hidden' }}>
                <p style={{ fontSize: '1rem', fontFamily: 'Roboto', fontWeight: 400 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. litr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.litr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </div>
        </div>

    );
}

export default ArtView;