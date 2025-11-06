import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Siap tingkatkan penjualan?</h3>
          <p className="mt-1 text-slate-600">Hubungi kami untuk demo dan konsultasi gratis.</p>
        </div>
        <form className="grid sm:grid-cols-3 gap-3">
          <input type="email" required placeholder="Email Anda" className="sm:col-span-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
          <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800">Kirim</button>
        </form>
      </div>
      <div className="py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Mahyudin POS. All rights reserved.</div>
    </footer>
  );
}
