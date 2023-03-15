import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="title">Contact Us</div>
      <p>
        If you have a project you would like to discuss or would like to know
        more about us, please fill in the form below and we will contact you
        shortly
      </p>
      <div className="form-group field">
        <input type="input" className="form-field" placeholder="Name" />
        <label className="form-label">Name</label>
      </div>
      <div className="form-group field">
        <input type="input" className="form-field" placeholder="Email" />
        <label className="form-label">Email</label>
      </div>
      <div className="form-group field">
        <input type="input" className="form-field" placeholder="Telephone" />
        <label className="form-label">Telephone</label>
      </div>
      <div className="form-group field">
        <input type="input" className="form-field" placeholder="Budget" />
        <label className="form-label">Budget</label>
      </div>
      <div className="form-group field">
        <textarea
          className="form-field"
          placeholder="About your project"
        />
        <label className="form-label">About your project</label>
      </div>
      <button className="contactus-button">Send</button>
      <p>
        Not a form person? You can contact us directly on 
        <a href="mailto:hello@balu.technology"> hello@balu.technology</a>
      </p>
    </div>
  );
};

export default ContactUs;
