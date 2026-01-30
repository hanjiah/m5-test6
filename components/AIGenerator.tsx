
import React, { useState } from 'react';
import { generateMarketingCopy } from '../services/geminiService';
import { AICopyResponse } from '../types';

const AIGenerator: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [tone, setTone] = useState('Professional');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AICopyResponse | null>(null);

  const handleGenerate = async () => {
    if (!businessType) return;
    setLoading(true);
    try {
      const copy = await generateMarketingCopy({ businessType, tone });
      setResult(copy);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] -z-0"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              AI Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Copy Generator</h2>
            <p className="text-slate-400">Experience how our AI can transform your business messaging in seconds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">What do you do?</label>
              <input 
                type="text" 
                placeholder="e.g., A yoga studio in Brooklyn"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Tone of Voice</label>
              <select 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              >
                <option>Professional</option>
                <option>Witty & Fun</option>
                <option>Luxury</option>
                <option>Direct & Bold</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading || !businessType}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${loading ? 'bg-slate-700' : 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-500/20'}`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <i className="fa-solid fa-circle-notch fa-spin mr-2"></i> Thinking...
              </span>
            ) : 'Generate My Copy'}
          </button>

          {result && (
            <div className="mt-12 p-8 bg-slate-800/50 rounded-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase text-indigo-400 mb-2 block">Headline</span>
                  <p className="text-2xl font-bold">{result.headline}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-indigo-400 mb-2 block">Sub-headline</span>
                  <p className="text-slate-300 text-lg leading-relaxed">{result.subheadline}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-indigo-400 mb-2 block">Suggested CTA</span>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold">
                    {result.cta}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIGenerator;
