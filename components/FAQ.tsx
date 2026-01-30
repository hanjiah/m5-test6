
import React, { useState } from 'react';

const faqs = [
  {
    q: "How does the AI generator work?",
    a: "Our system uses the latest Gemini AI models to analyze your business context and industry trends, generating high-conversion marketing copy tailored specifically to your needs."
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes! We believe in earning your business every month. You can cancel, upgrade, or downgrade your plan directly from your dashboard settings."
  },
  {
    q: "Do you offer enterprise-level security?",
    a: "Absolutely. We are SOC2 compliant and offer features like SSO integration, end-to-end encryption, and dedicated virtual private clouds for enterprise customers."
  },
  {
    q: "Is there a free trial for the Pro plan?",
    a: "We offer a 14-day free trial for all new users wanting to test the full power of our Pro features. No credit card required to start."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Got Questions?</h2>
        <p className="text-slate-600">Everything you need to know about NovaLaunch.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-indigo-200 bg-indigo-50/30' : 'border-slate-100'}`}
          >
            <button 
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
              <i className={`fa-solid ${openIndex === idx ? 'fa-minus' : 'fa-plus'} text-indigo-600 transition-transform`}></i>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48' : 'max-h-0'}`}>
              <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
