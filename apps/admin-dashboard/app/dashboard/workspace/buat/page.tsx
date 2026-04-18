"use client";

import React, { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DrawableMap = dynamic(() => import('@/components/DrawableMapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center rounded-2xl">
      <div className="flex flex-col items-center gap-3">
        <span className="material-symbols-outlined text-4xl text-emerald-400 animate-spin">refresh</span>
        <span className="text-sm font-semibold text-emerald-700">Memuat Peta Interaktif...</span>
      </div>
    </div>
  ),
});

type ZoneCategory = 'makro' | 'mikro';
type ZoneStatus = 'aktif' | 'perencanaan' | 'ditangguhkan';
type ZonePriority = 'normal' | 'tinggi' | 'kritis';

const CATEGORY_CONFIG = {
  makro: {
    label: 'Lahan Makro',
    desc: 'Area luas (>1 Ha) seperti hutan, perkebunan, atau kawasan konservasi besar.',
    icon: 'landscape',
    ring: 'ring-2 ring-offset-1 ring-emerald-500 bg-emerald-50 border-emerald-400',
    inactive: 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    label_color: 'text-emerald-800',
    map_color: '#10b981',
  },
  mikro: {
    label: 'Lahan Mikro',
    desc: 'Area terbatas (<1 Ha) seperti lab lapangan, kebun riset, atau zona uji coba.',
    icon: 'science',
    ring: 'ring-2 ring-offset-1 ring-violet-500 bg-violet-50 border-violet-400',
    inactive: 'border-slate-200 hover:border-violet-300 hover:bg-slate-50',
    badge: 'bg-violet-100 text-violet-700 border-violet-200',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-100',
    label_color: 'text-violet-800',
    map_color: '#8b5cf6',
  },
};

const STATUS_OPTIONS: { value: ZoneStatus; label: string; color: string }[] = [
  { value: 'aktif', label: 'Aktif', color: 'text-emerald-700' },
  { value: 'perencanaan', label: 'Perencanaan', color: 'text-blue-700' },
  { value: 'ditangguhkan', label: 'Ditangguhkan', color: 'text-amber-700' },
];

const PRIORITY_OPTIONS: { value: ZonePriority; label: string; icon: string; color: string; bg: string }[] = [
  { value: 'normal', label: 'Normal', icon: 'radio_button_unchecked', color: 'text-slate-600', bg: 'bg-slate-50 border-slate-200' },
  { value: 'tinggi', label: 'Tinggi', icon: 'priority_high', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  { value: 'kritis', label: 'Kritis', icon: 'emergency', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' },
];

export default function BuatWorkspacePage() {
  const [category, setCategory] = useState<ZoneCategory>('makro');
  const [status, setStatus] = useState<ZoneStatus>('aktif');
  const [priority, setPriority] = useState<ZonePriority>('normal');
  const [drawnArea, setDrawnArea] = useState<number | null>(null);
  const [drawnCoords, setDrawnCoords] = useState<string>('');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    namaZona: '',
    deskripsi: '',
    tanggalMulai: '',
    anggota: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAreaDrawn = useCallback((areaha: number, coordsStr: string) => {
    setDrawnArea(areaha);
    setDrawnCoords(coordsStr);
  }, []);

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => setCoverImage(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleImageFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFile(file);
  };

  const isFormValid = formData.namaZona.trim() !== '' && drawnArea !== null;

  return (
    <div className="flex flex-col h-full">

      {/* ── Page Header ── */}
      <div className="flex-shrink-0 px-8 pt-8 pb-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/workspace"
            className="p-2 rounded-xl text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200"
            title="Kembali ke Daftar Workspace"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-2xl font-manrope font-extrabold text-primary tracking-tight">Buat Ruang Kerja Baru</h1>
            <p className="text-sm text-slate-500 font-medium mt-0.5">Gambar batas zona pada peta dan lengkapi informasi di bawah ini.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/workspace" className="px-5 py-2.5 text-sm font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            Batal
          </Link>
          <button
            disabled={!isFormValid}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/15 hover:brightness-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            Simpan Ruang Kerja
          </button>
        </div>
      </div>

      {/* ── Main Split Layout ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[440px_1fr] overflow-hidden">

        {/* ── Left Panel: Form ── */}
        <div className="overflow-y-auto border-r border-slate-100 bg-white p-6 space-y-6">

          {/* Upload Gambar Cover */}
          <section>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Gambar Cover <span className="text-slate-300 font-normal normal-case">(opsional)</span>
            </label>
            {coverImage ? (
              <div className="relative group rounded-2xl overflow-hidden border border-slate-200 h-40">
                <img src={coverImage} alt="Cover preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 bg-white/90 text-slate-700 rounded-lg text-xs font-bold hover:bg-white transition-colors"
                  >
                    Ganti
                  </button>
                  <button
                    type="button"
                    onClick={() => setCoverImage(null)}
                    className="px-3 py-1.5 bg-rose-500/90 text-white rounded-lg text-xs font-bold hover:bg-rose-500 transition-colors"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ) : (
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative rounded-2xl border-2 border-dashed h-36 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                  isDragging ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                <span className={`material-symbols-outlined text-3xl mb-2 transition-colors ${isDragging ? 'text-emerald-500' : 'text-slate-300'}`}>add_photo_alternate</span>
                <p className="text-xs font-semibold text-slate-400">Seret & lepas atau klik untuk unggah</p>
                <p className="text-[10px] text-slate-300 mt-1">PNG, JPG, WEBP — maks 5 MB</p>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </section>

          {/* Kategori Zona */}
          <section>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Kategori Zona <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(Object.entries(CATEGORY_CONFIG) as [ZoneCategory, typeof CATEGORY_CONFIG.makro][]).map(([key, cfg]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCategory(key)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${category === key ? cfg.ring : cfg.inactive}`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${category === key ? cfg.iconBg : 'bg-slate-100'}`}>
                    <span className={`material-symbols-outlined text-[20px] ${category === key ? cfg.iconColor : 'text-slate-400'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {cfg.icon}
                    </span>
                  </div>
                  <p className={`font-bold text-sm ${category === key ? cfg.label_color : 'text-slate-600'}`}>{cfg.label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{cfg.desc}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Informasi Zona */}
          <section className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Informasi Zona</label>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 pl-1">Nama Ruang Kerja <span className="text-rose-500">*</span></label>
              <input
                type="text" name="namaZona" value={formData.namaZona} onChange={handleInput}
                placeholder="cth. Arboretum Barat — Blok C"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 pl-1">Deskripsi</label>
              <textarea
                name="deskripsi" value={formData.deskripsi} onChange={handleInput}
                placeholder="Jelaskan tujuan pemantauan zona ini..."
                rows={3}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 pl-1">Tanggal Mulai</label>
                <input
                  type="date" name="tanggalMulai" value={formData.tanggalMulai} onChange={handleInput}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 pl-1">Assign Tim</label>
                <input
                  type="text" name="anggota" value={formData.anggota} onChange={handleInput}
                  placeholder="Cari anggota..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Status & Prioritas */}
          <section className="space-y-4">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Status & Prioritas</label>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 pl-1">Status Proyek</label>
              <div className="relative">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ZoneStatus)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none"
                >
                  {STATUS_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500 pl-1">Tingkat Prioritas</label>
              <div className="grid grid-cols-3 gap-2">
                {PRIORITY_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPriority(opt.value)}
                    className={`flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl border-2 transition-all text-xs font-bold ${
                      priority === opt.value ? `${opt.bg} ${opt.color} border-current` : 'border-slate-200 text-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[18px] ${priority === opt.value ? opt.color : 'text-slate-300'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {opt.icon}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Info Dari Peta */}
          <section>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Data Zona dari Peta</label>
            {drawnArea !== null ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-bold">Polygon berhasil digambar</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 border border-emerald-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimasi Luas</p>
                    <p className="text-lg font-manrope font-extrabold text-emerald-700 mt-0.5">
                      {drawnArea < 1 ? `${(drawnArea * 10000).toFixed(0)} m²` : `${drawnArea.toFixed(2)} Ha`}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-emerald-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Koordinat Tengah</p>
                    <p className="text-xs font-mono font-bold text-slate-600 mt-0.5 break-all">{drawnCoords}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px] text-slate-300">draw</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Belum ada zona yang digambar</p>
                  <p className="text-xs text-slate-400 mt-0.5">Gunakan tool polygon di peta untuk menandai batas ruang kerja.</p>
                </div>
              </div>
            )}
          </section>

          {/* Petunjuk */}
          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">info</span> Cara Menggambar Zona
            </p>
            <ol className="text-xs text-blue-700 space-y-1.5 font-medium pl-1">
              <li className="flex gap-2"><span className="font-bold text-blue-400">1.</span> Klik ikon polygon di panel kiri peta</li>
              <li className="flex gap-2"><span className="font-bold text-blue-400">2.</span> Klik pada peta untuk menambahkan titik batas</li>
              <li className="flex gap-2"><span className="font-bold text-blue-400">3.</span> Double-klik atau klik titik pertama untuk menutup</li>
              <li className="flex gap-2"><span className="font-bold text-blue-400">4.</span> Data luas &amp; koordinat otomatis terisi di atas</li>
            </ol>
          </section>

        </div>

        {/* ── Right Panel: Map ── */}
        <div className="relative bg-slate-200 overflow-hidden">
          <div className="absolute top-4 right-4 z-[1000]">
            <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-white/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">Mode Gambar Aktif</span>
            </div>
          </div>
          <div className="absolute top-4 left-4 z-[1000]">
            <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border uppercase tracking-widest shadow-sm backdrop-blur-md bg-white/90 ${CATEGORY_CONFIG[category].badge}`}>
              {CATEGORY_CONFIG[category].label}
            </span>
          </div>
          <DrawableMap category={category} onAreaDrawn={handleAreaDrawn} />
        </div>
      </div>
    </div>
  );
}
