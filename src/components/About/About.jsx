import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.svg"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a Full Stack Developer with a background in finance, passionate about creating innovative tech solutions. My previous experience gave me deep insights into financial systems and business dynamics.</p>
            <p>Leveraging technologies like MERN and PERN (MongoDB, PostgreSQL, Express, React, and Node.js), I build dynamic web applications. I excel at solving complex problems by blending financial expertise with cutting-edge technology.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "55%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>React</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "80%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS IN FINANCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
