import bgimg from '../../../../public/images/Home Images/bg.jpg'
import styles from "./Hero.module.css"

function Hero() {
    return (
        <>
            <div className={styles["hero--section"]}>
                <div className={styles["hero--titles"]}>
                    <h1>Project</h1>
                    <h2>Yatrik</h2>
                    <a href="/login">
                        <button>Explore</button>
                    </a>
                </div>
                <div className={styles["background--img"]}>
                    <img src={bgimg} alt="Img" />
                </div>

            </div>
        </>
    )
}

export default Hero