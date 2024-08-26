import React from 'react';
import '../assets/AboutSection.scss';

const AboutSection: React.FC = () => {
    const users = [
        { id: 1, name: 'Ahmad Subardjo', title: 'Custom SEO Services', description: 'Tailored SEO solutions that drive traffic, boost visibility, and enhance your brand’s online presence.' },
        { id: 2, name: 'Andrew Silabus', title: 'SEO Website Design', description: 'Cutting-edge web design that integrates seamlessly with your marketing strategy and improves user engagement.' },
        { id: 3, name: 'Zahra Agustin', title: 'SEO Consulting', description: 'Expert consulting services to optimize your SEO strategies and maximize your ROI.' },
      ];
      
      return (
        <section className="about-section">
          <div className="about-header">
            <h2>About</h2>
            <h1>Your Digital Marketing Partner.</h1>
            <p>Driving Business Growth Through Strategic Digital Solutions.</p>
          </div>
          <div className="user-cards">
            {users.map((user, index) => (
              <div className="user-card" key={user.id}>
                <img src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`} alt={user.name} />
                <div className="user-card-content">
                  <div className="user-card-header">
                    <span className="user-card-number">0{index + 1}</span>
                    <span className="user-card-title">{user.title}</span>
                  </div>
                  <p>{user.description}</p>
                  <div className="user-card-footer">
                    <span>{user.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
  };
  
  export default AboutSection;