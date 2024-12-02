import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Walter Laurente,</span> <br />Full Stack Developer.
      </h1>
      <p>
      I am a Full-Stack Developer with 1.5 years of experience working on a variety of projects, including eCommerce platforms, background removal tools, and text-to-image SaaS applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connetc with me
          </AnchorLink>
        </div>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
