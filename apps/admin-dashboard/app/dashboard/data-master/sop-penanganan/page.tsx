import React from 'react';
import Link from 'next/link';

export default function SopPenangananPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-primary tracking-tight mb-1">Panduan SOP Penanganan</h1>
          <p className="text-on-surface-variant text-sm font-medium">Standar Operasional Prosedur untuk menjaga ketahanan ekosistem.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Contextual Search - Moved here for Consistency */}
          <div className="relative group flex-1 md:flex-none">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">search</span>
            </span>
            <input className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 w-full md:w-64 focus:ring-2 focus:ring-surface-tint focus:ring-offset-2 transition-all text-sm" placeholder="Cari dokumen SOP..." type="text" />
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl shadow-lg shadow-primary/10 hover:opacity-90 transition-all active:scale-95 font-semibold text-sm whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">add_circle</span>
            Tambah SOP Baru
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button className="px-5 py-2 bg-primary text-white rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0">Semua Dokumen</button>
        <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0">Pengendalian Hama</button>
        <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0">Pemeliharaan Teknis</button>
        <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0">Keamanan Lingkungan</button>
        <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0">Darurat &amp; Mitigasi</button>
      </div>

      {/* SOP Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Hama */}
        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-5">
            <div className="p-3 bg-secondary-container/30 text-on-secondary-container rounded-xl">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>pest_control</span>
            </div>
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container-variant text-[10px] font-bold rounded-full uppercase tracking-wider">Hama</span>
          </div>
          <h3 className="font-headline text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors">Pengendalian Serangga Tanah</h3>
          <p className="text-on-surface-variant text-xs leading-relaxed mb-6 font-medium">Langkah-langkah preventif dan kuratif untuk menangani populasi serangga tanah yang merusak akar tanaman di zona konservasi A1.</p>
          <div className="mt-auto pt-5 border-t border-surface-container flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span className="text-[10px] font-semibold">Update: 12 Jan 2024</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-surface-container-low text-primary font-bold text-xs rounded-xl hover:bg-primary-container hover:text-white transition-all ring-1 ring-surface-container-high">
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Lihat Dokumen (PDF)
            </button>
          </div>
        </div>

        {/* Card 2: Teknis */}
        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-5">
            <div className="p-3 bg-tertiary-fixed-dim/30 text-on-tertiary-fixed-variant rounded-xl">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            </div>
            <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded-full uppercase tracking-wider">Teknis</span>
          </div>
          <h3 className="font-headline text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors">Kalibrasi Sensor Kelembaban</h3>
          <p className="text-on-surface-variant text-xs leading-relaxed mb-6 font-medium">Prosedur mingguan untuk memastikan sensor IoT pada tanah memberikan data presisi dengan ambang batas eror 0.01%.</p>
          <div className="mt-auto pt-5 border-t border-surface-container flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span className="text-[10px] font-semibold">Update: 05 Feb 2024</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-surface-container-low text-primary font-bold text-xs rounded-xl hover:bg-primary-container hover:text-white transition-all ring-1 ring-surface-container-high">
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Lihat Dokumen (PDF)
            </button>
          </div>
        </div>

        {/* Card 3: Teknis */}
        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-5">
            <div className="p-3 bg-tertiary-fixed-dim/30 text-on-tertiary-fixed-variant rounded-xl">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
            </div>
            <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded-full uppercase tracking-wider">Teknis</span>
          </div>
          <h3 className="font-headline text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors">Pemeliharaan Irigasi Tetes</h3>
          <p className="text-on-surface-variant text-xs leading-relaxed mb-6 font-medium">Panduan pembersihan nozzle dan pengecekan kebocoran pipa pada sistem irigasi otomatis di area pembibitan.</p>
          <div className="mt-auto pt-5 border-t border-surface-container flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span className="text-[10px] font-semibold">Update: 28 Jan 2024</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-surface-container-low text-primary font-bold text-xs rounded-xl hover:bg-primary-container hover:text-white transition-all ring-1 ring-surface-container-high">
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Lihat Dokumen (PDF)
            </button>
          </div>
        </div>

        {/* Card 4: Hama */}
        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-5">
            <div className="p-3 bg-secondary-container/30 text-on-secondary-container rounded-xl">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
            </div>
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container-variant text-[10px] font-bold rounded-full uppercase tracking-wider">Hama</span>
          </div>
          <h3 className="font-headline text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors">Manajemen Jamur Daun</h3>
          <p className="text-on-surface-variant text-xs leading-relaxed mb-6 font-medium">Identifikasi awal spora jamur pada daun mahoni dan teknik penyemprotan antijamur organik yang aman bagi fauna lokal.</p>
          <div className="mt-auto pt-5 border-t border-surface-container flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span className="text-[10px] font-semibold">Update: 15 Feb 2024</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-surface-container-low text-primary font-bold text-xs rounded-xl hover:bg-primary-container hover:text-white transition-all ring-1 ring-surface-container-high">
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Lihat Dokumen (PDF)
            </button>
          </div>
        </div>

        {/* Card 5: Teknis */}
        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-5">
            <div className="p-3 bg-tertiary-fixed-dim/30 text-on-tertiary-fixed-variant rounded-xl">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
            </div>
            <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded-full uppercase tracking-wider">Teknis</span>
          </div>
          <h3 className="font-headline text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors">Update Firmware Gateway QR</h3>
          <p className="text-on-surface-variant text-xs leading-relaxed mb-6 font-medium">Prosedur instalasi patch keamanan pada perangkat gateway untuk sinkronisasi data real-time ke Dashboard KARU.</p>
          <div className="mt-auto pt-5 border-t border-surface-container flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span className="text-[10px] font-semibold">Update: 10 Feb 2024</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-surface-container-low text-primary font-bold text-xs rounded-xl hover:bg-primary-container hover:text-white transition-all ring-1 ring-surface-container-high">
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Lihat Dokumen (PDF)
            </button>
          </div>
        </div>

        {/* Card 6: Hama */}
        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-5">
            <div className="p-3 bg-secondary-container/30 text-on-secondary-container rounded-xl">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forest</span>
            </div>
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container-variant text-[10px] font-bold rounded-full uppercase tracking-wider">Hama</span>
          </div>
          <h3 className="font-headline text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors">Monitoring Invasif Spesies</h3>
          <p className="text-on-surface-variant text-xs leading-relaxed mb-6 font-medium">Teknik pemetaan populasi tanaman invasif yang mengancam biodiversitas lokal menggunakan sensor drone.</p>
          <div className="mt-auto pt-5 border-t border-surface-container flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span className="text-[10px] font-semibold">Update: 20 Feb 2024</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-surface-container-low text-primary font-bold text-xs rounded-xl hover:bg-primary-container hover:text-white transition-all ring-1 ring-surface-container-high">
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Lihat Dokumen (PDF)
            </button>
          </div>
        </div>
      </div>

      {/* Empty State / Load More Section */}
      <div className="mt-12 flex flex-col items-center justify-center text-center pb-8 border-b border-outline-variant/10">
        <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-slate-300">description</span>
        </div>
        <h4 className="text-primary font-extrabold text-lg">Menampilkan 6 dari 24 Dokumen</h4>
        <p className="text-slate-400 text-sm mt-1 mb-6 font-medium">Gunakan filter untuk membatasi pencarian Anda.</p>
        <button className="px-8 py-2.5 border-2 border-outline-variant text-primary font-bold rounded-xl hover:bg-surface-container-low transition-colors shadow-sm">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
}
