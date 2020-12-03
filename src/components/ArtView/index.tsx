import { Grid } from '@material-ui/core';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Art, ExhibitionState } from '../../redux/slices';
import ViewControl from '../ViewControl';

const ArtView = () => {

    const selectedExhibit = useSelector((state : ExhibitionState) => state.selectedExhibit);

    const [currentArt, setCurrentArt] = React.useState<Art>();
    
    React.useEffect(() => {
        if(selectedExhibit.art){
            setCurrentArt(selectedExhibit.art[0]);
        }
    }, [])

    return (
        <div style={{ width: '40%', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid #EEEEEE' }}>
            {/* Image */}
            <div style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
                <img src={require(`../../images/${currentArt?.image}.jpg`)} style={{ width: '70%', height: 'auto' }} />
            </div>

            {/* Divider */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative', marginTop: '2.5rem' }}>
                { currentArt?.index > 0 ? <ViewControl directionTo="back" /> : null}
                <div style={{ width: '80%', height: 1, borderTop: '2px solid red' }} />
                {currentArt?.index < selectedExhibit.art?.length ? <ViewControl directionTo="forward" /> : null}
            </div>

            {/* Text */}

            <div style={{ margin: '2.5rem 2rem', display: 'flex', overflow: 'scroll', overflowX: 'hidden' }}>
                <p style={{ fontSize: '1rem', fontFamily: 'Roboto', fontWeight: 400 }}> {currentArt?.text} </p>
            </div>
        </div>

    );
}

export default ArtView;