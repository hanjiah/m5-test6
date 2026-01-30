
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 right-[-5%] w-[35%] h-[35%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-indigo-700 font-medium text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span>New: AI Marketing Engine V2.0 is out!</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Scale your startup <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">faster than ever</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          The all-in-one platform to launch, grow, and scale your digital products. Join 10,000+ builders creating the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1">
            Get Started Free <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
          <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
            Book a Demo
          </button>
        </div>

        <div className="mt-16 relative">
          <div className="relative z-10 p-2 bg-white/50 backdrop-blur-sm border border-white/50 rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <img 
              src="https://picsum.photos/seed/dashboard/1200/600" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full object-cover shadow-inner"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/10 rounded-full -z-1 blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full -z-1 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
