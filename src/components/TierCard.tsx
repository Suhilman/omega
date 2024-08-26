import React from 'react';
import '../assets/TierCard.scss';

interface TierCardProps {
    title: string;
    price: string;
    oldPrice?: string;
    features: string[];
    popular?: boolean;
    newPlan?: boolean;
  }
  
  const TierCard: React.FC<TierCardProps> = ({ title, price, oldPrice, features, popular, newPlan }) => {
    return (
      <div className={`tier-card ${popular ? 'popular' : ''} ${newPlan ? 'new-plan' : ''}`}>
        {popular && <span className="badge popular-badge">Most Popular</span>}
        {newPlan && <span className="badge new-plan-badge">New Plan</span>}
        <div className="tier-header">
          <h3>{title}</h3>
          <div className="price-section">
            {oldPrice && <span className="old-price">{oldPrice}</span>}
            <span className="price">{price}</span>
          </div>
          <p className="per-month">per user/month</p>
          <p className="minimum-users">minimum of 3 users</p>
        </div>
        <div className="tier-actions">
          <button className="buy-button">Buy It</button>
          <button className="try-button">Try It</button>
        </div>
        <div className="tier-features">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <i className="check-icon">✔</i>
              {feature}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TierCard;