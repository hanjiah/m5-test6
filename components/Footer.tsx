
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <i className="fa-solid fa-bolt text-white"></i>
              </div>
              <span className="text-xl font-bold">NovaLaunch</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering the next generation of digital entrepreneurs to build, launch, and scale their ideas globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-400">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400">Tutorials</a></li>
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400">Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} NovaLaunch Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
