import { signOut } from "next-auth/react"
import styles from '@/app/page.module.css'

const Navbar = () => {
    return  (
        <div className={styles.navbar}>
            <a>home</a>
            <button onClick={()=> {signOut()}} className={styles.nvabarButton}>Logout</button>
        </div>
    )
}

export default Navbar