import * as React from 'react';
import lobbyWH from '../../images/lobbyWH.jpg';
import ArtView from '../ArtView';
import ExhibitView from '../ExhibitView';
import Navbar from '../Navbar';
import Presentation from '../Presentation';
import TeamMember, { Member } from '../TeamMember';
import styles from './lobbyStyles.module.css';

const teamMembers: Member[] = [
    { initials: 'BM', name: 'Brittany Moreno', job: 'Chinese Exhibit Expert' },
    { initials: 'JW', name: 'Javiy Wang', job: 'Japanese Exhibit Expert' },
    { initials: 'FT', name: 'Fahad Tahir', job: 'Indian Exhibit Expert' },
    { initials: 'PL', name: 'Peiping Lin', job: 'Filipino Exhibit Expert' },
    { initials: 'RB', name: 'Rahul Batra', job: 'Floor Plan Designer' },
    { initials: 'LA', name: 'Dr. Linh An', job: 'Asian American Studies Expert' },
]


const Lobby = () => {

    const [enter, setEnter] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null)

    const scrollDown = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div style={{ width: '100vw', height: '100vh', background: '#EEEEEE', position: 'relative', zIndex: 0 }}>
            {!enter && <div className={styles.lobbyContainer}>
                <div className={styles.introContainer}>
                    <h1 className={styles.welcome}> Welcome, </h1>
                    <h2 className={styles.redPandasExhibit}> To the Red Pandas Exhibit. </h2>
                    <h3 className={styles.exhibitTitleLabel}> Exhibit Title: </h3>
                    <p className={styles.exhibitTitle}> “Contaminated: How Asian Americans Have Been Racialized as Carriers of Disease in the Past, and What It Means in the Present” </p>

                    <div className={styles.buttonsContainer}>
                        <div className={styles.enterButton} onClick={() => setEnter(true)}>
                            <p className={styles.enterText}> Enter </p>
                        </div>

                        <div className={styles.moreInfoButton} onClick={scrollDown}>
                            <p className={styles.moreInfoText}> More Info </p>
                        </div>
                    </div>


                </div>

                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div style={{ background: '#EEEEEE', width: '14rem', height: '3.5rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <p style={{ fontSize: '2.2rem', fontFamily: 'Roboto', fontWeight: 400, color: '#AAAAAA' }}> ASIAN </p>
                        <p style={{ fontSize: '2.2rem', fontFamily: 'Roboto', fontWeight: 400, color: '#8D4BFF', marginLeft: -20 }}> 210 </p>
                    </div>
                </div>
            </div>}

            {!enter &&
                <div>
                    <div ref={ref} className={styles.floorPlanContainer}>
                        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: '-10rem' }}>
                            <h1 className={styles.floorPlanLabel}> Floor Plan </h1>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                <p className={styles.floorPlanLabelForeign}>평면도</p>
                                <p className={styles.floorPlanLabelForeign}>平面图</p>
                                <p className={styles.floorPlanLabelForeign}>間取り</p>
                                <p className={styles.floorPlanLabelForeign}>मंजिल की योजना</p>
                            </div>
                        </div>
                        <div className={styles.floorPlanImageContainer}>
                            <img className={styles.floorPlanImage} src={require('../../images/FloorPlan.png')} />
                        </div>

                        <p className={styles.floorPlanDescription}> This floor plan design allows the visitors to explore the exhibition one exhibit at a time. Allowing the visitors to take in all the information from one exhibit before moving to the next. The Chinese exhibit is at the end to show the past and present of Asian American discrimination in the United States. The last room is for "Stop AAPI Hate" which is a movement to help stop hate against Asian Americans. We raise awareness of this movement and encourage others to stand with it as well. Returning from the end of the exhibit to the front in this floor plan allows visitors to look at the exhibits another time before leaving.  </p>
                    </div>

                    <div className={styles.teamContainer}>
                        <div>
                            <h1 className={styles.teamLabel}> Meet the Team </h1>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                <p className={styles.teamLabelForeign}>팀 만나기</p>
                                <p className={styles.teamLabelForeign}>见团队</p>
                                <p className={styles.teamLabelForeign}>チームに会う</p>
                                <p className={styles.teamLabelForeign}>टीम से मिलो</p>
                            </div>
                        </div>

                        <div className={styles.teamMembersContainer}>
                            {teamMembers.map((member) => <TeamMember initials={member.initials} name={member.name} job={member.job} />)}
                        </div>
                    </div>
                </div>

            }


            {enter && <Presentation />}
        </div>
    );
}

export default Lobby;