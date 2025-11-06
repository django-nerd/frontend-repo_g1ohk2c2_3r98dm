import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Gratis',
    desc: 'Cocok untuk memulai',
    features: ['1 outlet', 'Maks 100 produk', 'Laporan dasar', 'Support komunitas'],
    cta: 'Mulai Sekarang',
    featured: false,
  },
  {
    name: 'Pro',
    price: 'Rp 79.000/bulan',
    desc: 'Skala usaha lebih serius',
    features: ['Semua di Starter', 'Tanpa batas produk', 'Multi kasir', 'Export laporan'],
    cta: 'Pilih Pro',
    featured: true,
  },
  {
    name: 'Bisnis',
    price: 'Hubungi Kami',
    desc: 'Kebutuhan khusus & integrasi',
    features: ['Semua di Pro', 'Multi outlet', 'Integrasi akuntansi', 'SLA support'],
    cta: 'Diskusikan',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Paket Harga</h2>
          <p className="mt-2 text-slate-600">Pilih paket sesuai kebutuhan bisnis Anda. Upgrade kapan saja.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.featured ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-white'} p-6 shadow-sm`}>
              <h3 className="font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{tier.desc}</p>
              <p className="mt-4 text-2xl font-bold text-slate-900">{tier.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center rounded-lg px-4 py-2 text-sm font-medium shadow ${tier.featured ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
