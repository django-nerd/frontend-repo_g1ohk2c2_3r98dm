import React from 'react';
import { BarChart3, Package, Users, Receipt } from 'lucide-react';

const features = [
  {
    icon: Receipt,
    title: 'Transaksi Cepat',
    desc: 'Proses penjualan dan retur dengan antarmuka yang simpel dan responsif.'
  },
  {
    icon: Package,
    title: 'Manajemen Stok',
    desc: 'Pantau persediaan, varian, dan peringatan stok menipis secara otomatis.'
  },
  {
    icon: Users,
    title: 'Multi Kasir',
    desc: 'Akses per kasir dan per outlet, dengan izin dan aktivitas yang terpantau.'
  },
  {
    icon: BarChart3,
    title: 'Laporan Real-time',
    desc: 'Ringkasan penjualan, profit, dan tren harian hingga bulanan.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Fitur Unggulan</h2>
        <p className="mt-2 text-slate-600">Semua yang Anda butuhkan untuk menjalankan usaha dengan efisien.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
