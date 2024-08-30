import "./Advice.css";

import foodIcon from "../../assets/images/icon-eating.svg";
import exerciseIcon from "../../assets/images/icon-exercise.svg";
import sleepIcon from "../../assets/images/icon-sleep.svg";

const AdviceSection = () => {
  return (
    <section className="advice">
      <div className="container advice-container">
        <div className="card">
          <img src={foodIcon} alt="Eating" />
          <div className="card-info">
            <h2>Healthy Eating</h2>
            <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
          </div>
        </div>
        <div className="card">
          <img src={exerciseIcon} alt="Exercise" />
          <div className="card-info">
            <h2>Regular exercise</h2>
            <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
          </div>
        </div>
        <div className="card">
          <img src={sleepIcon} alt="Sleep" />
          <div className="card-info">
            <h2>Adequate sleep</h2>
            <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdviceSection