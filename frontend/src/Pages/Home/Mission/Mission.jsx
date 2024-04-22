import styles from "./Mission.module.css"

function Mission() {
    return (
        <>
            <div className={styles["mission--body"]}>
                <p>Main Focus/Mission Statement</p>
                <div className={styles["body--div"]}>
                    <div className={styles["body--left"]}>
                        <h1>1</h1>
                        <p>Simplifying Journeys, Elevating Experiences
                        Yatrik is committed to simplifying the travel experience for enthusiasts worldwide, focusing on the unique beauty of Nepal. Our mission is to provide seamless, comprehensive travel solutions that not only showcase the stunning landscapes of Nepal but also contribute positively to local communities.We aim to elevate the overall travel experience, making every journey with Yatrik a transformative adventure that leaves a lasting impact on both travelers and the destinations we explore.
                        </p>
                    </div>
                    <div className={styles["body--right"]}>
                        <h1>2</h1>
                        <p>Bridging Boundaries, Creating Connections
                        At Yatrik, our mission is to transcend borders and bring people closer through the magic of travel. We aspire to be the bridge that connects global adventurers with the awe-inspiring wonders of Nepal. Through our comprehensive travel solutions and community-focused initiatives, we strive to create lasting connections between travelers and the heart of Nepal, fostering a mutual exchange of cultures, stories, and shared moments that transcend the ordinary and leave an indelible</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission