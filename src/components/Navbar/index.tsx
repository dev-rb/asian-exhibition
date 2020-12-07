import * as React from 'react';
import { Grid } from '@material-ui/core';
import bg from '../../images/asians-bg.svg';
import { useDispatch, useSelector } from 'react-redux';
import { ExhibitionState, setSelectedExhibit } from '../../redux/slices';

const Navbar = () => {

    const exhibits = useSelector((state: ExhibitionState) => state.exhibits);

    return (
        <div style={{ width: '100%', marginTop: '1rem', position: 'relative', display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {exhibits.map((item, index) => <NavItem name={item.name} selected={item.selected} index={index} />)}
            </div>
            <div style={{ position: 'absolute', top: 0, right: -25 }}>
                <div style={{ background: '#EEEEEE', width: '14rem', height: '4rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <p style={{ fontSize: '2.2rem', fontFamily: 'Roboto', fontWeight: 400, color: '#AAAAAA' }}> ASIAN </p>
                    <p style={{ fontSize: '2.2rem', fontFamily: 'Roboto', fontWeight: 400, color: '#8D4BFF', marginLeft: -20 }}> 210 </p>
                </div>
            </div>
        </div>
    );
}

interface NavItemProps {
    name: string,
    selected?: boolean,
    index: number
}

const NavItem = ({ name, selected, index }: NavItemProps) => {

    const textRef = React.useRef<HTMLDivElement>(null);

    const [selectedPos, setSelectedPos] = React.useState({ top: 0, left: 0 });

    const dispatch = useDispatch();

    const goTo = () => {
        dispatch(setSelectedExhibit(index));
    }

    React.useEffect(() => {
        if (textRef.current) {
            setSelectedPos({ top: textRef.current?.getBoundingClientRect().top, left: textRef.current?.clientLeft })
        }
    }, [])


    return (
        <div ref={textRef} onClick={goTo} style={{ marginLeft: '2rem', position: 'relative', cursor: 'pointer', userSelect: 'none' }}>
            <p style={{ fontSize: '1.875rem', fontFamily: 'Roboto', fontWeight: 400, color: selected ? '#666666' : '#D2D2D2', userSelect: 'none' }}> {name} </p>
            {selected ? <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', width: '4rem', height: '4rem', backgroundSize: 'contain', position: 'absolute', top: selectedPos.top - 5, left: selectedPos.left - 10, zIndex: -1 }} /> : null}
        </div>
    );
}

export default Navbar;


/*

    - Navbar Items:
        - Japanese
        - Chinese
        - Indian
        - Filipino
    - Item selection
        - Color change
        - Background pattern
        - Change Art view and Exhibit view

*/

/*

    <svg xmlns="http://www.w3.org/2000/svg" width="37.583" height="65.791" viewBox="0 0 37.583 65.791">
        <g id="Group_21" data-name="Group 21" transform="translate(-37.313 -13.786)" opacity="0.5">
            <rect id="Rectangle_100" data-name="Rectangle 100" width="3" height="56" rx="1.5" transform="translate(72.298 27.071) rotate(30)" fill="#ff4b63"/>
            <rect id="Rectangle_106" data-name="Rectangle 106" width="2" height="46" rx="1" transform="translate(72.35 38.74) rotate(30)" fill="#ff4b63"/>
            <rect id="Rectangle_105" data-name="Rectangle 105" width="4" height="67" rx="2" transform="translate(70.813 13.786) rotate(30)" fill="#ff4b63"/>
        </g>
    </svg>

*/