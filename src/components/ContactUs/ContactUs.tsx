import { useState } from "react";
import axios from "axios";
import "./ContactUs.scss";
import { Config, Environment } from "../../config/config";

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    const data = {
      name,
      email,
      telephone,
      budget,
      message,
    };
    console.log(import.meta.env.VITE_ENVIRONMENT);
    
    try {
      const response = await axios.post(Config[import.meta.env.VITE_ENVIRONMENT as Environment].EMAIL_ENDPOINT,
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="contactus">
      <div className="title">Contact Us</div>
      <p>
        If you have a project you would like to discuss or would like to know
        more about us, please fill in the form below and we will contact you
        shortly
      </p>
      <div className="form-group field">
        <input type="input" value={name} onChange={(event) => setName(event.target.value)} className="form-field" placeholder="Name" />
        <label className="form-label">Name</label>
      </div>
      <div className="form-group field">
        <input type="input" value={email} onChange={(event) => setEmail(event.target.value)} className="form-field" placeholder="Email" />
        <label className="form-label">Email</label>
      </div>
      <div className="form-group field">
        <input type="input" value={telephone} onChange={(event) => setTelephone(event.target.value)} className="form-field" placeholder="Telephone" />
        <label className="form-label">Telephone</label>
      </div>
      <div className="form-group field">
        <input type="input" value={budget} onChange={(event) => setBudget(event.target.value)} className="form-field" placeholder="Budget" />
        <label className="form-label">Budget</label>
      </div>
      <div className="form-group field">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="form-field"
          placeholder="About your project"
        />
        <label className="form-label">About your project</label>
      </div>
      <button onClick={sendEmail} className="contactus-button">Send</button>
      <p>
        Not a form person? You can contact us directly on 
        <a href="mailto:hello@balu.technology"> hello@balu.technology</a>
      </p>
    </div>
  );
};

export default ContactUs;
