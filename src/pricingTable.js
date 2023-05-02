import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';


const pricingData = [
  {
    name: 'Free',
    price: '$0',
    features: [
      { name: 'Single User', included: true },
      { name: '5GB Storage', included: true },
      { name: 'Unlimited Public Projects', included: true },
      { name: 'Community Access', included: true },
      { name: 'Unlimited Private Projects', included: false },
      { name: 'Dedicated Phone Support', included: false },
      { name: 'Free Subdomain', included: false },
      { name: 'Monthly Status Reports', included: false },
    ],
  },
  {
    name: 'Plus',
    price: '$19.99',
    features: [
      { name: '5 Users', included: true },
      { name: '50GB Storage', included: true },
      { name: 'Unlimited Public Projects', included: true },
      { name: 'Community Access', included: true },
      { name: 'Unlimited Private Projects', included: true },
      { name: 'Dedicated Phone Support', included: true },
      { name: 'Free Subdomain', included: true },
      { name: 'Monthly Status Reports', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    features: [
      { name: 'Unlimited Users', included: true },
      { name: '150GB Storage', included: true },
      { name: 'Unlimited Public Projects', included: true },
      { name: 'Community Access', included: true },
      { name: 'Unlimited Private Projects', included: true },
      { name: 'Dedicated Phone Support', included: true },
      { name: 'Unlimited Free Subdomains', included: true },
      { name: 'Monthly Status Reports', included: true },
    ],
  },
];

const PricingTable = () => {
    return (
      <div className="pricing-table">
        {pricingData.map((plan, index) => (
          <div className="pricing-plan" key={index}>
            <h3>{plan.name}</h3>
            <h2>{plan.price}<span className='month'>/month</span></h2>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  {feature.included ? (
                    <FaCheck className="included" />
                  ) : (
                    <FaTimes className="not-included" />
                  )}
                  <span className={feature.included ? 'included' : 'not-included'}>{feature.name}</span>
                </li>
              ))}
            </ul>
            <button>Sign Up</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default PricingTable;

    