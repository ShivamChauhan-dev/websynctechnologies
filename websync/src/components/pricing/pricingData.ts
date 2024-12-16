interface PricingTier {
  title: string;
  price: string;
  description: string;
  isPopular?: boolean;
  features: Array<{
    text: string;
    included: boolean;
  }>;
}

export const pricingTiers: PricingTier[] = [
  {
    title: 'Starter',
    price: '29',
    description: 'Perfect for small businesses and startups',
    features: [
      { text: '5 Team Members', included: true },
      { text: 'Basic Analytics', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Custom Domain', included: false },
      { text: 'Advanced Security', included: false },
      { text: 'API Access', included: false },
    ],
  },
  {
    title: 'Professional',
    price: '99',
    description: 'Ideal for growing businesses',
    isPopular: true,
    features: [
      { text: 'Unlimited Team Members', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: '24/7 Priority Support', included: true },
      { text: 'Custom Domain', included: true },
      { text: 'Advanced Security', included: true },
      { text: 'API Access', included: false },
    ],
  },
  {
    title: 'Enterprise',
    price: '299',
    description: 'For large-scale operations',
    features: [
      { text: 'Unlimited Team Members', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: '24/7 VIP Support', included: true },
      { text: 'Multiple Custom Domains', included: true },
      { text: 'Enterprise Security', included: true },
      { text: 'Unlimited API Access', included: true },
    ],
  },
];