
import styles from "../header/Header.module.css"


export default function Header () {
    return (
        <div className={styles.hed}>
            <div className={styles.title}>
                
                <div className={styles.text}>
                    <h1>Pedia</h1>
                </div>
            </div>
            <div style={{ height: '150px', overflow: 'hidden' }} className={styles.wave}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M-0.84,16.27 C159.98,198.83 255.92,-62.65 498.59,21.22 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }}></path>
                </svg>
                
            </div>
        </div>    
    )
}