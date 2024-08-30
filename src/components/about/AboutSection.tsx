import AboutBMI from "../../assets/images/image-man-eating.webp";
import "./About.css"

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-image">
          <img src={AboutBMI} alt="Image of man eating" />
        </div>
        <div className="about-content">
          <h1>What your BMI result means</h1>
          <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection