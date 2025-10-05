import { useState } from "react";
import emailjs from "emailjs-com";
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_knq4wao", "template_2dngi7x", {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    }, "lXQGheXTTcA4j8lfv")

      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className='contact-section' id='contact'>
      <h2 className="contact-title">Get in Touch</h2>
      <div className='contact'>
        <p className="contact-subtitle">Feel free to drop me a message</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
