import React from 'react';
import { PricingHeader } from './PricingHeader';
import { PricingCard } from './PricingCard';
import { pricingTiers } from './pricingData';

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeader />
        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              index={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
}