import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center shadow-lg">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">Mahyudin POS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Fitur</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Harga</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Kontak</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <Star className="h-4 w-4 text-amber-500" />
            <span>Ulasan</span>
          </button>
          <a href="#demo" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-slate-800 transition-colors">Coba Demo</a>
        </div>
      </div>
    </header>
  );
}
