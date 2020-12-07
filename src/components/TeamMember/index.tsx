import * as React from 'react';
import styles from './teamMemberStyles.module.css';

export interface Member {
    initials: string,
    name: string,
    job: string
}

const TeamMember = ({ initials, name, job }: Member) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <p className={styles.initials}> {initials} </p>
            </div>

            <p className={styles.name}> {name} </p>

            <div className={initials === "LA" ? styles.extraJob : ''}>
                <p className={styles.job}> {job} </p>
            </div>
        </div>
    );
}

export default TeamMember;