import styles from "../styles/fold.module.css"
import phone from "../assets/phone.jpg"


const Fold = () => {
    return (
        <div className={styles.mainContainer}>
            <div>
                <div>
                    <img src={phone} alt="Cover image of a crypto currency"/>
                </div>
                <div>
                    <h1>Placeholder</h1>
                    <p>Placeholder</p>
                </div>

            </div>
        </div>
    )
}

export default Fold;