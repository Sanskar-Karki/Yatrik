import styles from "./Aboutus.module.css"
import himal from "../../../../public/images/Home Images/himal.jpg"
import hilly from "../../../../public/images/Home Images/hilly.jpg"
import terai from "../../../../public/images/Home Images/terai.jpg"

function Aboutus() {
    return (
        <>
            <div className={styles["about--body"]}>
                <div className={styles["about--img"]}>
                    <img className={styles['img--hilly']} src={hilly} alt="" />
                    <img className={styles['img--himal']} src={himal} alt="" />
                    <img className={styles['img--terai']} src={terai} alt="" />
                </div>
                <div className={styles["about--txt"]}>
                    <h1 >AboutUs</h1>
                    <br />
                    <p >Here, we believe that travel is not just a journey, it is an exploration, an experience, and a connection with the world. Based in the breathtaking landscapes of Nepal, we take pride in being your one-stop solution for all your travel desires. Our mission is simple yet profound: to simplify travel for enthusiasts around the world and introduce them to the unparalleled beauty of Nepal.Nepal, a land of majestic mountains, serene landscapes, and vibrant cultures, awaits your discovery. Yatrik is dedicated to unraveling the hidden treasures of this Himalayan paradise, making your travel experience seamless and unforgettable. We understand the unique needs of travelers and have crafted our services to cater to every aspect of your journey.
                    </p><br />
                    <a href="/gallery">
                        <button className="_aboutText--btn_ia5z0_105">Explore</button>
                    </a>
                </div>

            </div >
        </>
    )
}

export default Aboutus