import Khalti from '../Payment/Khalti';
import StripeCheckout from 'react-stripe-checkout';
import styles from "./Unexplored.module.css"
import Navbar from "../Home/Navbar/Navbar"
import Footer from "../Home/Footer/Footer"

function Paymentpg() {
    return (
        <>
            <Navbar />
            <div className={styles["payment--support"]}>
                <div className={styles['khalti--container']}>
                    <h3 >
                        For National Help
                    </h3>
                    <Khalti />
                </div>

                <div className={styles['strip--container']}>

                    <div>
                        <h3>
                            For international help!
                        </h3>
                        <StripeCheckout className={styles.strip}
                            name="Yatrik"
                            description="Help Yatrik grow"
                            amount={1000}
                            token={token => this.props.handleToken(token)}
                            stripeKey="pk_test_51OT1szE21ldwoo85frCOIBit5YN68qhUTf76n4YLDGa6fO9wz5cjlBl7IFekttoOgF9GPwR7cNX7drUPv3YsDUfl00NwTQRyEj"
                        >
                            <button className={styles["stripe--button"]}>Add Credits</button>
                        </StripeCheckout>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Paymentpg