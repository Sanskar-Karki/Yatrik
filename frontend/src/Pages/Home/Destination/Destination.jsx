import styles from "./Destination.module.css"
import terai from "../../../../public/images/Home Images/terai.jpg"
import ilam from "../../../../public/images/Home Images/ilam.jpg"
import pokhara from "../../../../public/images/Home Images/pokhara.jpg"
import abc from "../../../../public/images/Home Images/abc.jpg"
import lumbini from "../../../../public/images/Home Images/lumbini.jpg"
import chitwan from "../../../../public/images/Home Images/chitwan.jpg"

function Destination() {
    return (
        <>
            <div className={styles["destination--title"]}>
                <p>Destination</p>
                <h6>Your <br />Destinations</h6>
                <div className={styles["destination--img"]} >

                    <a href="/destinations"> <img className={styles["destination--img1"]} src={terai} />
                    </a>

                    <a href=""> <img className={styles["destination--img2"]} src={ ilam} />
                    </a>

                    <a href=""> <img className={styles["destination--img3"]} src={ pokhara} />
                    </a>

                    <a href=""> <img className={styles["destination--img4"]} src={ abc} />
                    </a>

                    <a href=""> <img className={styles["destination--img5"]} src={ lumbini} />
                    </a>

                    <a href=""> <img  className={styles["destination--img6"]}src={ chitwan} />
                    </a>
                </div >
                <div className={styles["destination--btn"]}>
                    <a href="/destinations">
                    <button>See More</button>
                    </a>
                </div>
            </div >
        </>
    )
}

export default Destination