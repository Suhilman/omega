import React from 'react';
import '../assets/ContactSection.scss';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Connect with us for any inquiries or to discuss how we can help your business grow through our tailored solutions.</p>
            <p>We are here to assist you via email or phone.</p>
            <hr />
            <div className="contact-details">
              <div className="contact-item">
                <i className="icon location-icon">📍</i>
                <div>
                  <h4>Our Headquarters</h4>
                  <p>The Interior Design Studio Company<br />
                    The Courtyard, Al Quoz 1, Colorado, USA</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="icon phone-icon">📞</i>
                <div>
                  <h4>Phone (Landline)</h4>
                  <p>+912 3 567 8987</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Request a Consultation</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <div className="form-footer">
                <button type="submit">Submit Your Request</button>
              </div>
            </form>
          </div>
        </div>
      </section>    
    );
  };
  
  export default ContactSection;
