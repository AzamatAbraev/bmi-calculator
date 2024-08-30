import styles from "./Limitation.module.css";

const LimitationCard = ({icon, title, info}: {icon: string, title: string, info: string}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={icon} alt={title} />
        <h2>{title}</h2>
      </div>
      <div className={styles.cardContent}>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default LimitationCard