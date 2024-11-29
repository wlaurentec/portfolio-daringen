import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    const formData = new FormData(event.target);
  
    // Add access key to formData
    formData.append("access_key", "03ae9b5e-9023-4369-88c4-9deea9e6d648");
  
    // Convert formData to JSON format
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      // Send data to API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const responseJson = await res.json();
  
      // If the submission is successful
      if (responseJson.success) {
        alert(responseJson.message);
  
        // Reset the form
        event.target.reset();
      } else {
        console.error("Error", responseJson);
      }
    } catch (error) {
      console.error("Request failed", error);
    }
  };
  

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>greatcode@mail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>123-456-789</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>California, USA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
