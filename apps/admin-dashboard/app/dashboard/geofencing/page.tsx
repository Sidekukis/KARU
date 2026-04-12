"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component with SSR disabled
const LeafletMap = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-surface-container-low flex items-center justify-center animate-pulse rounded-2xl">
      <div className="flex flex-col items-center gap-3">
        <span className="material-symbols-outlined text-4xl text-emerald-300 animate-spin">refresh</span>
        <span className="text-sm font-semibold text-emerald-700">Memuat Peta Sinkronisasi...</span>
      </div>
    </div>
  ),
});

export default function GeofencingPage() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Peta Geofencing</h2>
          <p className="text-slate-500 mt-2 max-w-2xl font-body">Pantau lahan operasional Anda menggunakan satelit presisi tinggi. Tentukan batas zona, lacak pemulihan, dan jadwalkan patroli keamanan secara asinkron.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-emerald-950/10 hover:shadow-emerald-950/20 active:scale-95 transition-all text-sm group">
            <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">add</span>
            Tambah Zona Baru
          </button>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Total Zona</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-primary">12</span>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md font-bold">Terdaftar</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 group cursor-pointer hover:border-emerald-300 transition-colors">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Zona Aktif</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-emerald-700">8</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold flex items-center gap-0.5">
              1,240 Ha
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 group cursor-pointer hover:border-amber-300 transition-colors">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Zona Pemantauan</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-amber-600">3</span>
            <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-md font-bold flex items-center gap-0.5">
              840 Ha
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 group cursor-pointer hover:border-red-300 transition-colors">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Peringatan Kritis</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-red-600">1</span>
            <span className="material-symbols-outlined text-red-500 text-[18px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="mb-10 bg-white rounded-3xl p-2 shadow-xl shadow-emerald-900/5 border border-outline-variant/20 relative">
        <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 border border-black/10 rounded-xl shadow-sm flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="text-xs font-bold text-emerald-900 uppercase tracking-widest">Live Sync</span>
          </div>
        </div>

        {/* Map Container */}
        <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-inner relative isolate">
          <LeafletMap />
        </div>
      </div>

      {/* Zones Table List */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h3 className="text-xl font-bold font-manrope text-primary">Daftar Zona Konservasi</h3>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input className="bg-surface-container-highest border border-outline-variant/30 rounded-lg pl-9 pr-4 py-2 text-sm w-full md:w-64 focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 placeholder:text-slate-400 transition-all font-medium" placeholder="Cari nama zona..." type="text" />
            </div>
            <div className="relative hidden md:block">
              <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-2 pl-4 pr-8 text-sm font-semibold text-primary focus:ring-2 focus:ring-primary/20 appearance-none outline-none">
                <option>Semua Wilayah</option>
                <option>Amazon Tengah</option>
                <option>Pinus Utara</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-outline-variant/20 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest border-b border-outline-variant/20 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Nama Zona</th>
                  <th className="px-6 py-4 font-semibold">Luas Area</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Koordinat Tengah</th>
                  <th className="px-6 py-4 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 text-sm font-medium">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/70 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-900">Blok A - Hasil Tinggi</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded uppercase font-bold tracking-wider">AMZ</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-600 font-bold">1,240.5 Ha</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Aktif
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-500 text-xs">-3.465, -62.215</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">edit_location_alt</span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/70 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-900">Sektor B - Pemulihan</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded uppercase font-bold tracking-wider">AMZ</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-600 font-bold">840.2 Ha</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Pantauan
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-500 text-xs">-3.445, -62.155</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">edit_location_alt</span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/70 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 bg-blue-500 rounded-full opacity-60"></div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-900">Zona Penyangga 4</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded uppercase font-bold tracking-wider">AMZ</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-600 font-bold">45.0 Ha</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Stabil
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-500 text-xs">-3.415, -62.112</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg transition-all shadow-sm" title="Tampilkan di Peta">
                        <span className="material-symbols-outlined text-[18px]">visibility_off</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-lg transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">edit_location_alt</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
