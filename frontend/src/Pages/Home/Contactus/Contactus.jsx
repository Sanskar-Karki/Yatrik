import styles from "./Contactus.module.css"
import contact from "../../../../public/images/Home Images/contactpage.png"

function Contactus() {
    return (
        <>
            <div className={styles["contact-page"]}>
                <div className={styles["contact-form"]}>
                    <h2>Contact Us</h2>
                    <form className={styles["contact-formpage"]}>
                        <label ></label>
                        <input type="text" id="name" name="name" placeholder="Name*" required="" />

                        <label ></label>
                        <input type="text" id="number" name="number" placeholder="Phone Number*" required="" />

                        <label ></label>
                        <input type="email" id="email" name="email" placeholder="Mail id*" required="" />

                        <label ></label>
                        <textarea id="message" name="message" placeholder="Your Message(optional)" data-gramm="false"></textarea>

                        <button type="submit">
                            Send Message
                        </button>
                    </form>

                </div>
                <div className={styles["contact-rightside"]}>
                    <img src={contact} alt="contact-img" />
                </div>
            </div>

        </>
    )
}

export default Contactus