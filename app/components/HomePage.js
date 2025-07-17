import Navbar from "./Navbar"
import styles from '@/app/page.module.css'
const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.contentDiv}>
                <h1>Home page</h1>
            </div>
        </div>
    )
}

export default HomePage