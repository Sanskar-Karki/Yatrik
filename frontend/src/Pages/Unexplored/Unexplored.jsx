import Navbar from "../Home/Navbar/Navbar"
import Footer from "../Home/Footer/Footer"
import styles from "./Unexplored.module.css"

function Unexplored() {
    return (
        <>
            <Navbar />
            <div className={styles['unexplored--container']}>

                <h1>Unexplored</h1>
                <div className={styles['unxplored--dest']}>
                    <div className={styles["first--dest"]}>
                        <h5>Dolpa</h5>
                        <p>Nestled in the remote corners of northwestern Nepal, Dolpo captivates with its pristine landscapes of high-altitude deserts and ancient monasteries. The locals, resilient against the harsh conditions, endure daily challenges to preserve their unique culture. Dolpo is a testament to both natural beauty and the unwavering spirit of its inhabitants.</p>
                    </div>
                    <div className={styles["second--dest"]}>
                        <h5>Rara(Mugu)</h5>
                        <p>Tucked away in the far northwestern reaches of Nepal, Rara Lake is a hidden gem with its crystal-clear waters surrounded by snow-capped peaks. The locals, residing in this tranquil oasis, grapple with the geographical remoteness, relying on traditional practices for sustenance. </p>
                    </div>
                    <div className={styles["third--dest"]}>
                        <h5>Manang</h5>
                        <p>Perched in the rain shadow of the Annapurna range, Manang mesmerizes with its dramatic landscapes of towering cliffs and high-altitude lakes. The locals, resilient against the harsh mountain climate, face daily struggles in agriculture and resource management. Manang's beauty lies not only in its breathtaking scenery but also in the determination of its inhabitants</p>
                    </div>
                </div>

                <figure className={styles['testimonial--body']}>
                    <figcaption>
                        <blockquote>
                            <p>" a hidden jewel in Nepal, left me spellbound with its vast high-altitude deserts and ancient monasteries " </p>
                        </blockquote>
                        <h3>Pasang Sherpa</h3>
                        <h4>Paldong Gaupalika</h4>
                    </figcaption>
                </figure>
                <figure className={styles['testimonial--body']}>
                    <figcaption>
                        <blockquote>
                            <p>" a tranquil haven in the far northwestern reaches of Nepal, is a breathtaking gem surrounded by snow-capped peaks "</p>
                        </blockquote>
                        <h3>John Williamson</h3>
                        <h4>Australia</h4>
                    </figcaption>
                </figure>
                <figure className={styles['testimonial--body']}>
                    <figcaption>
                        <blockquote>
                            <p>" its dramatic landscapes nestled in the Annapurna rain shadow, is a visual masterpiece of towering cliffs and high-altitude lakes "</p>
                        </blockquote>
                        <h3>Saurav Tripathi</h3>
                        <h4>India</h4>
                    </figcaption>
                </figure>
                <a href="/payme">
                    <button className={styles['unexplored--payment']}>Donation</button>
                </a>
            </div>

            <Footer />
        </>
    )
}

export default Unexplored