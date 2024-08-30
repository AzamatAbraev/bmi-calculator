import "./Home.css"
import logo from "../../assets/images/logo.svg";
import Calculator from "../calculator/Calculator";

const HomeSection = () => {
  return (
    <section className="home">
      <div className="container home-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />

        </div>
        <div className="home-main">
          <div className="home-content">
            <h1>Body Mass Index Calculator</h1>
            <p>Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
          </div>
          <div className="home-calculator">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;