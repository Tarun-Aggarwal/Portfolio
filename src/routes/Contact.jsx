import "../styles/Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await emailjs.send(
        'service_4srsgo4',
        'template_rwtlmrl',
        formData,
        'tBPotsOzK5_-de5ma'
      )
  
      const res2 = await emailjs.send(
          'service_4srsgo4',
          'template_qzod3s3',
          formData,
          'tBPotsOzK5_-de5ma'
      );
    } catch (err) {
      alert(err);
      return;
    }

    setFormData({
      name: "",
      email: "",
      message: ""
    });
    toast.success("Form submitted successfully!!");
  };

  return (
    <div className="contact">
        <ToastContainer 
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastClassName="custom-toast"
        />

        <form onSubmit={sendEmail}>
            <h2 className="form-heading">Get in Touch</h2>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button type="submit">Send</button>
        </form>
    </div>
  );
};