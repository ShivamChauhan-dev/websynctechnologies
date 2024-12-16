import React from 'react';
import { Check } from 'lucide-react';
import { useGetStartedContext } from '../../context/GetStartedContext';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  isPopular?: boolean;
  index: number;
}

export function PricingCard({ title, price, description, features, isPopular, index }: PricingCardProps) {
  const { openModal } = useGetStartedContext();

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-xl ${isPopular ? 'ring-2 ring-indigo-600' : ''} 
        transition-all duration-300 hover:-translate-y-2 animate-scale-in`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {isPopular && (
        <span className="absolute top-0 px-4 py-1 -translate-y-1/2 bg-indigo-600 text-white text-sm font-medium rounded-full animate-fade-in">
          Most Popular
        </span>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <p className="mt-8">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-base font-medium text-gray-500">/month</span>
        </p>
        <ul className="mt-8 space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check 
                className={`h-5 w-5 transition-all duration-300 ${
                  feature.included ? 'text-indigo-600 scale-100' : 'text-gray-300 scale-75'
                }`} 
              />
              <span className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => openModal(title)}
          className={`mt-8 w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-300
            ${isPopular 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105' 
              : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:scale-105'}`}
        >
          Get started
        </button>
      </div>
    </div>
  );
}