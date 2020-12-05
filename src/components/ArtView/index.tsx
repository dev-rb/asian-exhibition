import { Grid } from '@material-ui/core';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Art, ExhibitionState } from '../../redux/slices';
import ViewControl from '../ViewControl';

const ArtView = () => {

    const selectedExhibit = useSelector((state: ExhibitionState) => state.selectedExhibit);

    const [currentArt, setCurrentArt] = React.useState<number>(0);

    const goTo = (direction: string) => {
        if (direction === "forward") {
            setCurrentArt(prev => prev + 1);
        } else {
            setCurrentArt(prev => prev - 1);
        }
    }

    React.useEffect(() => {
        setCurrentArt(0);
    }, [selectedExhibit])

    return (
        <div style={{ width: '40%', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid #EEEEEE' }}>
            {/* Image */}
            <div style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', minHeight: '40%', maxHeight: '40%', marginTop: '2rem' }}>
                {selectedExhibit.art[currentArt] && <img src={require(`../../images/${selectedExhibit.art[currentArt].image}.jpg`)} style={{ width: '70%', height: 'auto' }} />}
            </div>

            {/* Divider */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative', marginTop: '2.5rem' }}>
                {selectedExhibit.art[currentArt] && selectedExhibit.art[currentArt].index > 0 ? <ViewControl goTo={() => goTo("back")} directionTo="back" /> : null}
                <div style={{ width: '80%', height: 1, borderTop: '2px solid #666666' }} />
                {selectedExhibit.art[currentArt] && selectedExhibit.art[currentArt].index < selectedExhibit.art.length - 1 ? <ViewControl goTo={() => goTo("forward")} directionTo="forward" /> : null}
            </div>

            {/* Text */}

            <div style={{ margin: '2.5rem 2rem', display: 'flex', overflow: 'auto', overflowX: 'hidden' }}>
                <p style={{ fontSize: '1.4rem', fontFamily: 'Roboto', fontWeight: 400 }}> {selectedExhibit.art[currentArt] && selectedExhibit.art[currentArt].text} </p>
            </div>
        </div>

    );
}

export default ArtView;