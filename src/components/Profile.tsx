import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/flaviobarbosa.png" alt="Flavio Barbosa" />
            <div>
                <strong>Flavio Barbosa</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1</p>
            </div>
        </div>
    )
}