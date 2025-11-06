import React from 'react';
import { Check, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-blue-200/60 via-indigo-200/40 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium ring-1 ring-blue-200">
            <Rocket className="h-3.5 w-3.5" />
            Siap pakai untuk UMKM
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Point of Sales modern untuk usaha Anda</h1>
          <p className="mt-4 text-slate-600 leading-relaxed">Kelola transaksi, stok, dan laporan penjualan dalam satu aplikasi yang cepat, ringan, dan mudah digunakan. Cocok untuk toko retail, kafe, resto, dan lain-lain.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800 transition-colors">
              Mulai Coba Gratis
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors">
              Lihat Paket Harga
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {[
              'Tanpa ribet, langsung jalan',
              'Cepat dan responsif',
              'Multi device (web & mobile)',
              'Laporan real-time',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl ring-1 ring-slate-200 overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop"
              alt="POS Dashboard"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl ring-1 ring-slate-200 shadow p-4 w-56">
            <p className="text-xs text-slate-500">Transaksi hari ini</p>
            <p className="text-2xl font-bold text-slate-900">Rp 3.250.000</p>
            <p className="text-xs text-emerald-600 font-medium">+12% vs kemarin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
