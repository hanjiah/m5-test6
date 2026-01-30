
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'f1',
    title: 'Lightning Fast Deployment',
    description: 'Ship your product in minutes with our automated CI/CD pipeline and global edge network.',
    icon: 'fa-bolt-lightning'
  },
  {
    id: 'f2',
    title: 'AI-Powered Insights',
    description: 'Get deep analytics and automated suggestions to improve your user conversion rates.',
    icon: 'fa-brain'
  },
  {
    id: 'f3',
    title: 'Secure by Default',
    description: 'Enterprise-grade security including SSO, 2FA, and automated threat detection built-in.',
    icon: 'fa-shield-halved'
  },
  {
    id: 'f4',
    title: 'Global Scale',
    description: 'Scale from zero to millions of users seamlessly with our distributed cloud infrastructure.',
    icon: 'fa-globe'
  },
  {
    id: 'f5',
    title: 'Collaborative Editor',
    description: 'Real-time collaboration tools that keep your entire team in sync, no matter where they are.',
    icon: 'fa-users-gear'
  },
  {
    id: 'f6',
    title: 'Extensive API',
    description: 'Connect with 2,000+ integrations or build your own custom workflows with our robust API.',
    icon: 'fa-code'
  }
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">Capabilities</h2>
        <p className="text-4xl font-extrabold text-slate-900 mb-4">Everything you need to succeed</p>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Stop juggling multiple tools. We've built the most comprehensive toolkit for modern businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 bg-white hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <i className={`fa-solid ${feature.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
