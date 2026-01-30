
import React from 'react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Starter',
    price: '$0',
    description: 'Perfect for side projects and hobbyists.',
    features: ['Up to 3 projects', 'Basic Analytics', 'Community Support', 'Standard API access']
  },
  {
    id: 'p2',
    name: 'Pro',
    price: '$49',
    description: 'Everything you need to grow your business.',
    features: ['Unlimited projects', 'Advanced AI Insights', 'Priority Support', 'Full API Access', 'Custom Domains'],
    isPopular: true
  },
  {
    id: 'p3',
    name: 'Enterprise',
    price: '$199',
    description: 'Custom solutions for large organizations.',
    features: ['SLA Guarantees', 'Dedicated Account Manager', 'Custom Integrations', 'On-premise deployment', 'Audit Logs']
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">Pricing</h2>
        <p className="text-4xl font-extrabold text-slate-900 mb-4">Plans for every stage</p>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Simple, transparent pricing. Start free and scale as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative p-8 rounded-[2rem] border transition-all duration-300 ${plan.isPopular ? 'border-indigo-600 shadow-2xl shadow-indigo-100 bg-white scale-105 z-10' : 'border-slate-100 bg-white hover:border-slate-200'}`}
          >
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Most Popular
              </span>
            )}
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
            <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
            
            <div className="mb-8">
              <span className="text-4xl font-black text-slate-900">{plan.price}</span>
              <span className="text-slate-500"> /month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-slate-600">
                  <i className="fa-solid fa-circle-check text-indigo-500 mt-1 mr-3"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
