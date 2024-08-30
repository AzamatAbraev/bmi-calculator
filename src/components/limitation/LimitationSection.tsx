import LimitationCard from "./LimitationCard"
import "./LimitationSection.css"

import genderIcon from "../../assets/images/icon-gender.svg";
import ageIcon from "../../assets/images/icon-age.svg";
import muscleIcon from "../../assets/images/icon-muscle.svg";
import pregnancyIcon from "../../assets/images/icon-pregnancy.svg";
import raceIcon from "../../assets/images/icon-race.svg";

const LimitationSection = () => {
  return (
    <section className="limitation">
      <div className="container limitation-container">
        <div className="limitation-header">
          <h1>Limitations of BMI</h1>
          <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
        </div>
        <div className="limitation-row">
          <LimitationCard icon={genderIcon} title="Gender" info="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI." />
          <LimitationCard icon={ageIcon} title="Age" info="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content." />
          <LimitationCard icon={muscleIcon} title="Muscle" info="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat." />
          <LimitationCard icon={pregnancyIcon} title="Pregnancy" info="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child." />
          <LimitationCard icon={raceIcon} title="Race" info="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse." />
        </div>
      </div>
    </section>
  )
}

export default LimitationSection