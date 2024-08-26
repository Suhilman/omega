import React from 'react';
import '../assets/PricingSection.scss';
import TierCard from './TierCard';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-header">
        <h2>Choose the best plan for your business</h2>
        <div className="plan-switcher">
          <button className="toggle-button">Individuals and Teams</button>
          <button className="toggle-button active">Business Plans</button>
        </div>
      </div>
      <div className="tiers">
        <TierCard
          title="Business Plus"
          oldPrice="$33"
          price="$25"
          features={[
            "Unlimited external collaborators",
            "Upload files up to 15GB",
            "Unlimited storage",
            "Technical Support during local business hours",
            "Built-in integrations with Microsoft 365, Google Workspace, and Slack, plus:",
            "Access to 10 additional enterprise app integrations"
          ]}
          popular
        />
        <TierCard
          title="Enterprise"
          oldPrice="$47"
          price="$35"
          features={[
            "Unlimited external collaborators",
            "Upload files up to 50GB",
            "Unlimited storage",
            "Technical Support during local business hours",
            "Built-in integrations with Microsoft 365, Google Workspace, and Slack, plus:",
            "Access to 1,500+ other enterprise app integrations"
          ]}
        />
        <TierCard
          title="Enterprise Plus"
          price="Custom"
          features={[
            "Upload files up to 150GB",
            "Box Shield",
            "Box Governance",
            "Box Sign: Unlimited e-signatures via web app",
            "Box Relay",
            "Box Shuttle",
            "Box Platform",
            "Box Zones"
          ]}
          newPlan
        />
      </div>
    </section>
  );
};

export default PricingSection;