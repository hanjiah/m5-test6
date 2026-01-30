
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'CEO at FinFlow',
    content: "NovaLaunch completely changed how we ship features. Our development cycle is 40% faster and the built-in analytics are a game changer.",
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Founder of DesignSync',
    content: "The AI copy generator is surprisingly good. It saved our marketing team hours of brainstorming and the output was incredibly high quality.",
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Lead Developer at Spark',
    content: "Scale has never been easier. We went from 10 users to 50,000 in a month and NovaLaunch handled the infrastructure without a single hiccup.",
    avatar: 'https://picsum.photos/seed/elena/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
        <p className="text-4xl font-extrabold text-slate-900 mb-4">Loved by builders worldwide</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="max-w-sm bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-sm"></i>
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{t.content}"</p>
            </div>
            
            <div className="flex items-center">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-indigo-100 mr-4" />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
