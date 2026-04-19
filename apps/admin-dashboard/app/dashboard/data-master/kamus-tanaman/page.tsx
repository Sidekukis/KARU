'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ── Types ──────────────────────────────────────────────────────────────────────
type Kategori = 'Sayuran' | 'Buah' | 'Palawija' | 'Umbi-umbian' | 'Rempah' | 'Perkebunan' | 'Hias';
type RisikoPenyakit = 'Tinggi' | 'Sedang' | 'Rendah';

type Tanaman = {
  id: string;
  namaLokal: string;
  namaIlmiah: string;
  kategori: Kategori;
  risikoPenyakit: RisikoPenyakit;
  siklusPanen: string;
  habitat: string;
  deskripsi: string;
  hama: string[];
  penyakit: string[];
  foto: string;
  ditambahkan: string;
};

// ── Mock Data (tanaman umum perkebunan/pertanian) ─────────────────────────────
const INIT_DATA: Tanaman[] = [
  {
    id: 'T-001', namaLokal: 'Padi', namaIlmiah: 'Oryza sativa',
    kategori: 'Palawija', risikoPenyakit: 'Tinggi',
    siklusPanen: '3–4 Bulan', habitat: 'Sawah / Lahan Basah',
    deskripsi: 'Tanaman serealia utama yang menjadi bahan pangan pokok sebagian besar masyarakat Indonesia. Memerlukan air yang cukup dan tanah berlumpur.',
    hama: ['Wereng cokelat', 'Penggerek batang', 'Walang sangit'],
    penyakit: ['Blas (Pyricularia oryzae)', 'Hawar daun bakteri', 'Kerdil rumput'],
    foto: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=200&h=200&fit=crop',
    ditambahkan: '12 Jan 2025',
  },
  {
    id: 'T-002', namaLokal: 'Jagung Manis', namaIlmiah: 'Zea mays var. saccharata',
    kategori: 'Palawija', risikoPenyakit: 'Sedang',
    siklusPanen: '2–3 Bulan', habitat: 'Ladang / Tegalan',
    deskripsi: 'Tanaman biji-bijian serbaguna yang tumbuh di berbagai jenis tanah. Dimanfaatkan sebagai pangan, pakan ternak, dan bahan baku industri.',
    hama: ['Ulat grayak', 'Lalat bibit', 'Penggerek buah jagung'],
    penyakit: ['Bulai (Peronosclerospora maydis)', 'Busuk tongkol', 'Hawar daun'],
    foto: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&h=200&fit=crop',
    ditambahkan: '15 Jan 2025',
  },
  {
    id: 'T-003', namaLokal: 'Tomat', namaIlmiah: 'Solanum lycopersicum',
    kategori: 'Sayuran', risikoPenyakit: 'Tinggi',
    siklusPanen: '3 Bulan', habitat: 'Kebun / Lahan Kering',
    deskripsi: 'Tanaman hortikultura populer yang buahnya kaya vitamin C dan antioksidan. Sensitif terhadap kelembapan tinggi yang memicu serangan jamur.',
    hama: ['Kutu kebul', 'Thrips', 'Ulat tanah'],
    penyakit: ['Layu Fusarium', 'Busuk ujung buah', 'Virus kuning (TYLCV)'],
    foto: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200&h=200&fit=crop',
    ditambahkan: '20 Jan 2025',
  },
  {
    id: 'T-004', namaLokal: 'Cabai Merah', namaIlmiah: 'Capsicum annuum',
    kategori: 'Sayuran', risikoPenyakit: 'Tinggi',
    siklusPanen: '3–4 Bulan', habitat: 'Kebun / Polybag',
    deskripsi: 'Tanaman rempah buah yang banyak dibudidayakan di Indonesia. Sangat rentan terhadap virus antraknosa dan serangan thrips pada musim kemarau.',
    hama: ['Thrips', 'Kutu daun', 'Tungau merah'],
    penyakit: ['Antraknosa (Colletotrichum sp.)', 'Layu bakteri', 'Virus mozaik'],
    foto: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=200&h=200&fit=crop',
    ditambahkan: '22 Jan 2025',
  },
  {
    id: 'T-005', namaLokal: 'Singkong', namaIlmiah: 'Manihot esculenta',
    kategori: 'Umbi-umbian', risikoPenyakit: 'Rendah',
    siklusPanen: '8–12 Bulan', habitat: 'Tegalan / Lahan Marginal',
    deskripsi: 'Tanaman pangan strategis yang tahan terhadap lahan kering dan miskin hara. Umbinya kaya karbohidrat dan daunnya dapat dikonsumsi sebagai sayur.',
    hama: ['Tungau merah (Tetranychus urticae)', 'Kutu putih'],
    penyakit: ['Busuk batang', 'Mosaik vein banding'],
    foto: 'https://images.unsplash.com/photo-1594282416271-b7c53f1c1f72?w=200&h=200&fit=crop',
    ditambahkan: '25 Jan 2025',
  },
  {
    id: 'T-006', namaLokal: 'Pisang Kepok', namaIlmiah: 'Musa paradisiaca',
    kategori: 'Buah', risikoPenyakit: 'Sedang',
    siklusPanen: '9–12 Bulan', habitat: 'Pekarangan / Kebun',
    deskripsi: 'Salah satu komoditas buah terluas ditanam di Indonesia. Rentan terhadap penyakit layu Panama yang disebabkan jamur tanah Fusarium oxysporum.',
    hama: ['Kumbang pisang (Cosmopolites sordidus)', 'Nematoda'],
    penyakit: ['Layu Panama (Fusarium oxysporum)', 'Bercak daun Sigatoka', 'Bunchy top virus'],
    foto: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop',
    ditambahkan: '28 Jan 2025',
  },
  {
    id: 'T-007', namaLokal: 'Kelapa Sawit', namaIlmiah: 'Elaeis guineensis',
    kategori: 'Perkebunan', risikoPenyakit: 'Sedang',
    siklusPanen: '5 Tahun (mulai produksi)', habitat: 'Perkebunan Tropis',
    deskripsi: 'Tanaman perkebunan penghasil minyak terbesar di dunia. Budidaya berskala besar dan rentan terhadap penyakit ganoderma pada fase dewasa.',
    hama: ['Kumbang tanduk (Oryctes rhinoceros)', 'Ulat api', 'Rayap'],
    penyakit: ['Busuk pangkal batang (Ganoderma)', 'Crown disease', 'Tajuk busuk'],
    foto: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=200&h=200&fit=crop',
    ditambahkan: '2 Feb 2025',
  },
  {
    id: 'T-008', namaLokal: 'Kangkung', namaIlmiah: 'Ipomoea aquatica',
    kategori: 'Sayuran', risikoPenyakit: 'Rendah',
    siklusPanen: '1 Bulan', habitat: 'Sawah / Kolam / Pekarangan',
    deskripsi: 'Sayuran hijau yang sangat cepat tumbuh dan toleran terhadap berbagai kondisi. Sangat populer sebagai konsumsi sehari-hari karena murah dan bergizi.',
    hama: ['Ulat daun', 'Belalang'],
    penyakit: ['Karat daun', 'Layu rebah semai'],
    foto: 'https://images.unsplash.com/photo-1643566827037-a4b10c7dd0cf?w=200&h=200&fit=crop',
    ditambahkan: '5 Feb 2025',
  },
  {
    id: 'T-009', namaLokal: 'Bawang Merah', namaIlmiah: 'Allium cepa var. aggregatum',
    kategori: 'Rempah', risikoPenyakit: 'Tinggi',
    siklusPanen: '2–3 Bulan', habitat: 'Dataran Rendah / Sedang',
    deskripsi: 'Rempah umbi yang menjadi bumbu dasar masakan Indonesia. Sangat rentan terhadap jamur alternaria dan layu bakteri pada kelembapan tinggi.',
    hama: ['Ulat bawang (Spodoptera exigua)', 'Thrips'],
    penyakit: ['Bercak ungu (Alternaria porri)', 'Busuk umbi', 'Layu Fusarium'],
    foto: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=200&h=200&fit=crop',
    ditambahkan: '8 Feb 2025',
  },
  {
    id: 'T-010', namaLokal: 'Karet', namaIlmiah: 'Hevea brasiliensis',
    kategori: 'Perkebunan', risikoPenyakit: 'Sedang',
    siklusPanen: '5–7 Tahun (mulai sadap)', habitat: 'Perkebunan Tropis',
    deskripsi: 'Tanaman perkebunan penghasil lateks alam. Banyak dibudidayakan di Sumatra dan Kalimantan. Peka terhadap penyakit gugur daun terutama di musim hujan.',
    hama: ['Rayap', 'Belalang'],
    penyakit: ['Gugur daun (Colletotrichum)', 'Hawar daun (Phytophthora)', 'Mouldy rot'],
    foto: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop',
    ditambahkan: '12 Feb 2025',
  },
];

const KATEGORI_OPTS: Kategori[] = ['Sayuran', 'Buah', 'Palawija', 'Umbi-umbian', 'Rempah', 'Perkebunan', 'Hias'];
const RISIKO_OPTS: RisikoPenyakit[] = ['Tinggi', 'Sedang', 'Rendah'];

// ── Badge helpers ──────────────────────────────────────────────────────────────
function KategoriBadge({ k }: { k: Kategori }) {
  const map: Record<Kategori, string> = {
    'Sayuran':    'bg-emerald-100 text-emerald-800',
    'Buah':       'bg-orange-100 text-orange-800',
    'Palawija':   'bg-yellow-100 text-yellow-800',
    'Umbi-umbian':'bg-amber-100 text-amber-800',
    'Rempah':     'bg-rose-100 text-rose-800',
    'Perkebunan': 'bg-teal-100 text-teal-800',
    'Hias':       'bg-purple-100 text-purple-800',
  };
  return (
    <span className={`inline-flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${map[k]}`}>
      {k}
    </span>
  );
}

function RisikoBadge({ r }: { r: RisikoPenyakit }) {
  const map: Record<RisikoPenyakit, { cls: string; dot: string }> = {
    'Tinggi': { cls: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
    'Sedang': { cls: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
    'Rendah': { cls: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  };
  const { cls, dot } = map[r];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {r}
    </span>
  );
}

// ── CRUD Drawer ────────────────────────────────────────────────────────────────
type DrawerMode = 'view' | 'add' | 'edit';

const EMPTY_FORM: Omit<Tanaman, 'id' | 'ditambahkan'> = {
  namaLokal: '', namaIlmiah: '', kategori: 'Sayuran', risikoPenyakit: 'Sedang',
  siklusPanen: '', habitat: '', deskripsi: '',
  hama: [], penyakit: [], foto: '',
};

function TanamanDrawer({
  mode, tanaman, onClose, onSave,
}: {
  mode: DrawerMode;
  tanaman: Tanaman | null;
  onClose: () => void;
  onSave: (data: Tanaman) => void;
}) {
  const [form, setForm] = useState<Omit<Tanaman, 'id' | 'ditambahkan'>>(
    tanaman ? { ...tanaman } : { ...EMPTY_FORM }
  );
  const [drawerMode, setDrawerMode] = useState<DrawerMode>(mode);
  const [hamaInput, setHamaInput] = useState(form.hama.join(', '));
  const [penyakitInput, setPenyakitInput] = useState(form.penyakit.join(', '));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const saved: Tanaman = {
      ...(tanaman ?? { id: `T-${Date.now()}`, ditambahkan: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) }),
      ...form,
      hama: hamaInput.split(',').map(s => s.trim()).filter(Boolean),
      penyakit: penyakitInput.split(',').map(s => s.trim()).filter(Boolean),
    };
    onSave(saved);
    onClose();
  };

  const isEditable = drawerMode === 'add' || drawerMode === 'edit';
  const title = drawerMode === 'add' ? 'Tambah Tanaman Baru' : drawerMode === 'edit' ? `Edit: ${form.namaLokal}` : form.namaLokal;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
        onClick={drawerMode === 'view' ? onClose : undefined}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-xl bg-white z-50 shadow-2xl flex flex-col overflow-hidden"
        style={{ animation: 'slideInRight 0.25s ease-out' }}>

        {/* Header */}
        <div className={`flex-shrink-0 px-6 py-5 flex items-center justify-between border-b border-slate-100 ${drawerMode === 'edit' ? 'bg-amber-50' : drawerMode === 'add' ? 'bg-emerald-50' : 'bg-slate-50'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${drawerMode === 'edit' ? 'bg-amber-500' : drawerMode === 'add' ? 'bg-emerald-600' : 'bg-primary'}`}>
              <span className="material-symbols-outlined text-white text-[18px]">{drawerMode === 'add' ? 'add' : drawerMode === 'edit' ? 'edit' : 'eco'}</span>
            </div>
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${drawerMode === 'edit' ? 'text-amber-600' : drawerMode === 'add' ? 'text-emerald-700' : 'text-slate-400'}`}>
                {drawerMode === 'add' ? 'Tambah Baru' : drawerMode === 'edit' ? 'Mode Edit' : 'Detail Tanaman'}
              </p>
              <h2 className="text-base font-manrope font-extrabold text-primary leading-tight">{title}</h2>
            </div>
          </div>
          <button type="button" onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-colors">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">

          {/* Photo */}
          {drawerMode === 'view' && form.foto && (
            <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img src={form.foto} alt={form.namaLokal} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Foto URL input (edit/add) */}
          {isEditable && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">URL Foto</label>
              <input type="text" name="foto" value={form.foto} onChange={handleInput}
                placeholder="https://..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
            </div>
          )}

          {/* Nama Lokal + Ilmiah */}
          {isEditable ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Lokal</label>
                <input type="text" name="namaLokal" value={form.namaLokal} onChange={handleInput}
                  placeholder="cth. Padi" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Ilmiah</label>
                <input type="text" name="namaIlmiah" value={form.namaIlmiah} onChange={handleInput}
                  placeholder="cth. Oryza sativa" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium italic text-slate-700 placeholder:text-slate-300 placeholder:not-italic focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xl font-manrope font-extrabold text-primary">{form.namaLokal}</p>
              <p className="text-sm italic text-slate-500 font-medium mt-0.5">{form.namaIlmiah}</p>
              <div className="flex items-center gap-2 mt-3">
                <KategoriBadge k={form.kategori} />
                <RisikoBadge r={form.risikoPenyakit} />
              </div>
            </div>
          )}

          {/* Kategori + Risiko */}
          {isEditable && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori</label>
                <div className="relative">
                  <select name="kategori" value={form.kategori} onChange={handleInput}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none">
                    {KATEGORI_OPTS.map(k => <option key={k}>{k}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Risiko Penyakit</label>
                <div className="relative">
                  <select name="risikoPenyakit" value={form.risikoPenyakit} onChange={handleInput}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none">
                    {RISIKO_OPTS.map(r => <option key={r}>{r}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
              </div>
            </div>
          )}

          {/* Siklus + Habitat */}
          {isEditable ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Siklus Panen</label>
                <input type="text" name="siklusPanen" value={form.siklusPanen} onChange={handleInput}
                  placeholder="cth. 3–4 Bulan" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Habitat / Lokasi Tanam</label>
                <input type="text" name="habitat" value={form.habitat} onChange={handleInput}
                  placeholder="cth. Sawah / Lahan Basah" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 mb-1">Siklus Panen</p>
                <p className="text-sm font-bold text-slate-700">{form.siklusPanen}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 mb-1">Habitat</p>
                <p className="text-sm font-bold text-slate-700">{form.habitat}</p>
              </div>
            </div>
          )}

          {/* Deskripsi */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deskripsi</label>
            {isEditable ? (
              <textarea name="deskripsi" value={form.deskripsi} onChange={handleInput} rows={3}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all resize-none" />
            ) : (
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{form.deskripsi}</p>
            )}
          </div>

          {/* Hama */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-red-400" style={{ fontVariationSettings: "'FILL' 1" }}>pest_control</span>
              Hama Umum
            </label>
            {isEditable ? (
              <input type="text" value={hamaInput} onChange={e => setHamaInput(e.target.value)}
                placeholder="Pisahkan dengan koma, cth: Wereng, Thrips"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
            ) : (
              <div className="flex flex-wrap gap-2">
                {form.hama.map(h => (
                  <span key={h} className="bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-red-100">{h}</span>
                ))}
              </div>
            )}
          </div>

          {/* Penyakit */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>coronavirus</span>
              Penyakit yang Sering Menyerang
            </label>
            {isEditable ? (
              <input type="text" value={penyakitInput} onChange={e => setPenyakitInput(e.target.value)}
                placeholder="Pisahkan dengan koma, cth: Blas, Busuk akar"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
            ) : (
              <div className="flex flex-wrap gap-2">
                {form.penyakit.map(p => (
                  <span key={p} className="bg-amber-50 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-lg border border-amber-100">{p}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-5 border-t border-slate-100 flex gap-3">
          {drawerMode === 'view' ? (
            <>
              <button type="button" onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>Tutup
              </button>
              <button type="button" onClick={() => setDrawerMode('edit')}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]">edit</span>Edit Data
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={drawerMode === 'edit' ? () => setDrawerMode('view') : onClose}
                className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">undo</span>Batal
              </button>
              <button type="button" onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]">save</span>Simpan
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}

// ── Delete Confirm Dialog ──────────────────────────────────────────────────────
function DeleteDialog({ tanaman, onConfirm, onCancel }: { tanaman: Tanaman; onConfirm: () => void; onCancel: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[3px] z-50" onClick={onCancel} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm" style={{ animation: 'scaleIn 0.18s ease-out' }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-red-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>delete_forever</span>
            </div>
            <div>
              <h3 className="font-manrope font-extrabold text-primary text-base">Hapus Tanaman?</h3>
              <p className="text-xs text-slate-500 mt-0.5">Data yang dihapus tidak dapat dikembalikan.</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl px-4 py-3 mb-5 flex items-center gap-3 border border-slate-100">
            <img src={tanaman.foto} alt={tanaman.namaLokal} className="w-10 h-10 rounded-lg object-cover" />
            <div>
              <p className="text-sm font-bold text-primary">{tanaman.namaLokal}</p>
              <p className="text-xs italic text-slate-500">{tanaman.namaIlmiah}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={onCancel} className="flex-1 py-2.5 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">Batal</button>
            <button type="button" onClick={onConfirm} className="flex-1 py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-colors shadow-md">Ya, Hapus</button>
          </div>
        </div>
      </div>
      <style>{`@keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
    </>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function KamusTanamanPage() {
  const [data, setData] = useState<Tanaman[]>(INIT_DATA);
  const [search, setSearch] = useState('');
  const [filterKategori, setFilterKategori] = useState<string>('semua');
  const [filterRisiko, setFilterRisiko] = useState<string>('semua');
  const [drawerState, setDrawerState] = useState<{ open: boolean; mode: DrawerMode; tanaman: Tanaman | null }>({ open: false, mode: 'view', tanaman: null });
  const [deleteTarget, setDeleteTarget] = useState<Tanaman | null>(null);

  const filtered = data.filter(t => {
    const matchSearch = t.namaLokal.toLowerCase().includes(search.toLowerCase()) || t.namaIlmiah.toLowerCase().includes(search.toLowerCase());
    const matchKat = filterKategori === 'semua' || t.kategori === filterKategori;
    const matchRisiko = filterRisiko === 'semua' || t.risikoPenyakit === filterRisiko;
    return matchSearch && matchKat && matchRisiko;
  });

  const handleSave = (saved: Tanaman) => {
    setData(prev => {
      const idx = prev.findIndex(t => t.id === saved.id);
      if (idx >= 0) { const next = [...prev]; next[idx] = saved; return next; }
      return [saved, ...prev];
    });
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    setData(prev => prev.filter(t => t.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const openDrawer = (mode: DrawerMode, tanaman: Tanaman | null = null) =>
    setDrawerState({ open: true, mode, tanaman });

  // Stats
  const totalTinggi = data.filter(t => t.risikoPenyakit === 'Tinggi').length;

  return (
    <div className="p-8 space-y-6 max-w-[1600px] mx-auto w-full pb-16">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Kamus Tanaman</h1>
          <p className="text-slate-500 mt-2 font-body max-w-2xl">
            Basis data referensi tanaman untuk sistem deteksi AI. Berisi informasi morfologi, kategori, serta daftar hama dan penyakit yang sering menyerang.
          </p>
        </div>
        <button
          type="button"
          onClick={() => openDrawer('add')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all text-sm whitespace-nowrap self-start md:self-auto"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Tambah Tanaman
        </button>
      </div>

      {/* Sub-nav Tabs */}
      <div className="flex gap-8 border-b border-slate-200">
        <Link href="/dashboard/data-master/kamus-tanaman" className="pb-4 text-sm font-bold text-primary relative">
          Kamus Tanaman
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
        </Link>
        <Link href="/dashboard/data-master/kamus-penyakit-hama" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
          Kamus Penyakit &amp; Hama
        </Link>
        <Link href="/dashboard/data-master/sop-penanganan" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
          Panduan SOP
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Tanaman', value: data.length, icon: 'eco', color: 'text-primary', bg: 'bg-emerald-50' },
          { label: 'Risiko Tinggi', value: totalTinggi, icon: 'warning', color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Jenis Kategori', value: KATEGORI_OPTS.length, icon: 'category', color: 'text-violet-600', bg: 'bg-violet-50' },
          { label: 'Diperbarui', value: 'Hari Ini', icon: 'sync', color: 'text-teal-600', bg: 'bg-teal-50' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.bg}`}>
              <span className={`material-symbols-outlined text-[22px] ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
              <p className={`text-xl font-manrope font-extrabold ${s.color}`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Cari nama tanaman..."
            className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-full focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        {/* Kategori filter */}
        <div className="relative">
          <select value={filterKategori} onChange={e => setFilterKategori(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 outline-none appearance-none transition-all">
            <option value="semua">Semua Kategori</option>
            {KATEGORI_OPTS.map(k => <option key={k}>{k}</option>)}
          </select>
          <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
        </div>

        {/* Risiko filter */}
        <div className="relative">
          <select value={filterRisiko} onChange={e => setFilterRisiko(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 outline-none appearance-none transition-all">
            <option value="semua">Semua Risiko</option>
            {RISIKO_OPTS.map(r => <option key={r}>{r}</option>)}
          </select>
          <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
        </div>

        <p className="text-xs text-slate-400 font-medium ml-auto">{filtered.length} tanaman ditemukan</p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Foto</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Nama Tanaman</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Kategori</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Siklus Panen</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Risiko Penyakit</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Hama / Penyakit Utama</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="py-16 text-center">
                  <span className="material-symbols-outlined text-4xl text-slate-300 mb-2 block">search_off</span>
                  <p className="text-slate-500 font-bold">Tidak ada tanaman yang cocok</p>
                  <button type="button" onClick={() => { setSearch(''); setFilterKategori('semua'); setFilterRisiko('semua'); }}
                    className="mt-2 text-xs text-emerald-600 font-bold hover:underline">Reset filter</button>
                </td></tr>
              ) : filtered.map(t => (
                <tr key={t.id} className="hover:bg-slate-50/60 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex-shrink-0">
                      <img src={t.foto} alt={t.namaLokal} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-4 min-w-[160px]">
                    <p className="text-sm font-bold text-primary">{t.namaLokal}</p>
                    <p className="text-xs italic text-slate-400 mt-0.5">{t.namaIlmiah}</p>
                  </td>
                  <td className="px-4 py-4"><KategoriBadge k={t.kategori} /></td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-semibold text-slate-700">{t.siklusPanen}</span>
                  </td>
                  <td className="px-4 py-4"><RisikoBadge r={t.risikoPenyakit} /></td>
                  <td className="px-4 py-4 max-w-[200px]">
                    <div className="flex flex-wrap gap-1">
                      {t.hama.slice(0, 2).map(h => (
                        <span key={h} className="text-[10px] bg-red-50 text-red-600 font-semibold px-2 py-0.5 rounded-md border border-red-100">{h}</span>
                      ))}
                      {t.hama.length > 2 && <span className="text-[10px] bg-slate-100 text-slate-500 font-semibold px-2 py-0.5 rounded-md">+{t.hama.length - 2}</span>}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <button type="button" title="Lihat Detail" onClick={() => openDrawer('view', t)}
                        className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-emerald-50 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button type="button" title="Edit" onClick={() => openDrawer('edit', t)}
                        className="p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button type="button" title="Hapus" onClick={() => setDeleteTarget(t)}
                        className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination row */}
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Menampilkan <span className="font-bold text-primary">{filtered.length}</span> dari <span className="font-bold text-primary">{data.length}</span> tanaman
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-slate-200 text-slate-400 transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors">2</button>
            <button className="p-2 rounded-lg hover:bg-slate-200 text-slate-400 transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {drawerState.open && (
        <TanamanDrawer
          mode={drawerState.mode}
          tanaman={drawerState.tanaman}
          onClose={() => setDrawerState(s => ({ ...s, open: false }))}
          onSave={handleSave}
        />
      )}

      {/* Delete dialog */}
      {deleteTarget && (
        <DeleteDialog
          tanaman={deleteTarget}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
