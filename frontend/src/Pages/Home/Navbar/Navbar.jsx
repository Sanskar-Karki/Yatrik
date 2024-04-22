import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles["nav--body"]}>

            <div className={styles.logo}>
                <a href="/">
                    <img src="../../../../public/yatrik-logo.png" alt="" />
                </a>
            </div>

            <ol className={styles["list--body"]}>
                <a href="/">
                    Home
                </a>
                <a href="/destinations">
                    Destinations
                </a>
                <a href="/gallery">
                    Gallery
                </a>
                <a href="/unexplored">
                    Unexplored
                </a>
                <a href="https://mediafiles.botpress.cloud/2a09509f-6cad-4574-92af-6b5976f1ca3f/webchat/bot.html">
                    Yatrik Bot
                </a>
          
            </ol>

        </nav>
    )
}

export default Navbar